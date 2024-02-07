// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { Split } from "@/wab/classes";
import { SplitType } from "@/wab/splits";
import { DatePicker, Slider } from "antd";
import { observer } from "mobx-react";
import moment from "moment";
import * as React from "react";
import ScheduleControls from "./ScheduleControls";
import SegmentControls from "./SegmentControls";

const SliceControls = observer(function SliceControls(props: {
  split: Split;
  idx: number;
  values: any[];
  onChange: (vals: any[]) => void;
}) {
  const { split, idx, values, onChange } = props;
  if (split.splitType === SplitType.Experiment) {
    return (
      <Slider
        value={values[idx]}
        min={1}
        max={99}
        step={1}
        onChange={(val) => {
          const newVals = [...values];
          newVals[idx] = val;
          newVals[1 - idx] = 100 - val;
          onChange(newVals);
        }}
      />
    );
  } else if (split.splitType === SplitType.Schedule) {
    if (idx === 0) {
      return null;
    }
    const rawVal = values[idx];
    const val = JSON.parse(rawVal);
    /**
     * jsonLogic expresion to match time in between
     * Both FROM and TO should be in ISO format
     * {
     *  "<=": [FROM, { "var": "time" }, TO]
     * }
     */
    const range = {
      from: val?.["<="]?.[0],
      to: val?.["<="]?.[2],
    };
    const onDateChange = (
      value: moment.Moment | null,
      label: "from" | "to"
    ) => {
      if (value) {
        const newValue = moment(value).toISOString();
        const newFromValue =
          label === "from" ? newValue : range.from ?? newValue;
        const newToValue = label === "to" ? newValue : range.to ?? newValue;
        const newVals = [...values];
        newVals[idx] = JSON.stringify({
          "<=": [newFromValue, { var: "time" }, newToValue],
        });
        onChange(newVals);
      } else {
        const newVals = [...values];
        const newFromValue = label != "from" ? range.from : null;
        const newToValue = label != "to" ? range.to : null;
        newVals[idx] = JSON.stringify({
          "<=": [newFromValue, { var: "time" }, newToValue],
        });
        onChange(newVals);
      }
    };
    return (
      <ScheduleControls
        fromInput={
          <DatePicker
            showTime
            style={{
              width: "100%",
            }}
            format="YYYY-MM-DDTHH:mm"
            value={
              range.from &&
              moment(moment(range.from).format("YYYY-MM-DDTHH:mm"))
            }
            onChange={(e) => {
              onDateChange(e, "from");
            }}
          />
        }
        toInput={
          <DatePicker
            showTime
            style={{
              width: "100%",
            }}
            format="YYYY-MM-DDTHH:mm"
            value={
              range.to && moment(moment(range.to).format("YYYY-MM-DDTHH:mm"))
            }
            onChange={(e) => {
              onDateChange(e, "to");
            }}
          />
        }
      />
    );
  } else {
    if (idx === 0) {
      return null;
    } else {
      return (
        <SegmentControls
          value={values[idx]}
          onChange={(newVal: string) => {
            const newVals = [...values];
            newVals[idx] = newVal;
            onChange(newVals);
          }}
        />
      );
    }
  }
});

export default SliceControls;
