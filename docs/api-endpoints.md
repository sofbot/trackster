#__API Endpoints__  
##__HTML API__
__Root__  
* `GET /` - loads React web app

##__JSON API__  
__Users__  
* `POST /api/users`
* `PATCH /api/users`

__Session__
* `POST /api/session`
* `DELETE /api/session`

__Projects__  
* `GET /api/projects`
* `POST /api/projects`  
* `GET /api/projects/:projectId`
* `DELETE /api/projects/:projectId`

__Members__
* `GET /api/projects/:projectId/memberships`
  * returns all members of a project
* `POST /api/projects/:projectId/memberships`
  * adds new member to project by creating a new invite
* `DELETE /api/projects/:projectId/memberships/:memberId`
  * removes a member from a project

  __Stories__  
  * `GET /api/projects/:projectId/stories`
  * `POST /api/projects/:projectId/stories/:storyId`
  * `PATCH /api/projects/:projectId/stories/:storyId`
  * `DELETE /api/projects/:projectId/stories/:storyId`

  __Tasks__  
  * `GET /api/stories/:storyId/tasks`
  * `POST /api/stories/:storyId/tasks`
  * `DELETE /api/stories/:storyId/tasks`
