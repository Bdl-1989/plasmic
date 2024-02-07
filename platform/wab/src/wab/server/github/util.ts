import { assert } from "@/wab/common";
import { Config } from "@/wab/server/config";
import { Project, User } from "@/wab/server/entities/Entities";
import { Octokit } from "@octokit/core";

export async function assertCanUseGithubRepository(
  token: string,
  owner: string,
  repo: string
) {
  const octokit = new Octokit({ auth: token });
  const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
    owner,
    repo,
  });
  assert(data.permissions?.push, "No push access to repository");
}

export function mkCommitMessage(
  title: string,
  givenDescription: string | undefined,
  user: User,
  project: Project,
  config: Config
) {
  const commitFooter = `
This is an automated commit generated by ${user.firstName} ${user.lastName}
using Plasmic (https://plasmic.app/).

Project name: ${project.name}
Project URL: ${config.host}/projects/${project.id}
  `.trim();

  const description = givenDescription
    ? `${givenDescription}\n\n--\n${commitFooter}`
    : commitFooter;
  return { title, description };
}
