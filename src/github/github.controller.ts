import { Controller, Get, Param, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) { }

  @Get('/repos/:owner/:repo/commits')
  async listCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Query('per_page') per_page: number,
  ) {
    if (!owner || !repo) {
      return {
        success: false,
        message: 'Please provide owner and repo',
      };
    }
    const commits = await this.githubService.listCommits(owner, repo, per_page);
    return {
      success: true,
      commits,
    };
  }
}
