#__Component Hierarchy__

__AuthFormContainer__  
* AuthForm
* Error

__SplashContainer__
* Main

__DashboardContainer__
* Dashboard
  * ProjectIndexItem
  * ProjectForm

__ProjectContainer__
* __ProjectNavContainer__
  * ProjectHeader
  * ProjectNav
* __PanelContainer__
* Panel
  * __StoryContainer__
  * Story
    * __TaskContainer__
    * Task
* __MembersContainer__
* MembersIndex
* MembersForm
* Invites

# __Routes__

<table>
  <thead>
    <tr>
      <th>path</th>
      <th>component</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>"/"</td>
    <td>"HomeContainer"</td>
  </tr>
  <tr>
    <td>"/sign-up"</td>
    <td>"AuthFormContainer"</td>
  </tr>
  <tr>
    <td>"/sign-in"</td>
    <td>"AuthFormContainer"</td>
  </tr>
  <tr>
    <td>"/dashboard"</td>
    <td>"DashboardContainer"</td>
  </tr>
  <tr>
    <td>"/projects/:projectId"</td>
    <td>"ProjectContainer"</td>
  </tr>
  <tr>
    <td>"/projects/:projectId/memberships"</td>
    <td>"MembersContainer"</td>
  </tr>
  <tr>
    <td>"/projects/:projectId/memberships/:memberId"</td>
    <td>"MembersContainer"</td>
  </tr>
  </tbody>
</table>
