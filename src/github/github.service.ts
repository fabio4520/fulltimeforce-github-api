import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  constructor() { }

  async listCommits(owner: string, repo: string) {
    const url = `${process.env.GITHUB_API_URL}/repos/${owner}/${repo}/commits`;
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    return response.data;
  }
}
