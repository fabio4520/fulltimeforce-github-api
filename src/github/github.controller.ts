import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) { }

  @Get('/repos/:owner/:repo/commits')
  async listCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {
    if (!owner || !repo) {
      return {
        success: false,
        message: 'Please provide owner and repo',
      };
    }
    const commits = await this.githubService.listCommits(owner, repo);
    return {
      success: true,
      commits,
    };
  }
}
