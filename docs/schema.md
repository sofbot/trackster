#__Schema Information__

##__users__
<table>
  <thead>
    <tr>
      <th>column type</th>
      <th>data type</th>
      <th>details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>username</td>
      <td>string</td>
      <td>not null, indexed, unique</td>
    </tr>
    <tr>
      <td>email</td>
      <td>string</td>
      <td>not null, indexed, unique</td>
    </tr>
    <tr>
      <td>password_digest</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>session_token</td>
      <td>string</td>
      <td>not null, indexed, unique</td>
    </tr>
  </tbody>
</table>

##__projects__
<table>
  <thead>
    <tr>
      <th>column type</th>
      <th>data type</th>
      <th>details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>title</td>
      <td>string</td>
      <td>not null</td>
    </tr>
  </tbody>
</table>

##__works__
<table>
  <thead>
    <tr>
      <th>column type</th>
      <th>data type</th>
      <th>details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>integer</td>
      <td>not null, foreign key (references users), indexed</td>
    </tr>
    <tr>
      <td>project_id</td>
      <td>integer</td>
      <td>not null, foreign key (references projects), indexed</td>
    </tr>
  </tbody>
</table>


##__stories__
<table>
  <thead>
    <tr>
      <th>column type</th>
      <th>data type</th>
      <th>details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>title</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>state</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>type</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>description</td>
      <td>text</td>
    </tr>
    <tr>
      <td>ice_boxed</td>
      <td>boolean</td>
      <td>not null, default: true</td>
    </tr>
    <tr>
      <td>project_id</td>
      <td>integer</td>
      <td>not null, foreign key (references projects), indexed</td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>integer</td>
      <td>not null, foreign key (references users), indexed</td>
    </tr>
  </tbody>
</table>

##__tasks__
<table>
  <thead>
    <tr>
      <th>column type</th>
      <th>data type</th>
      <th>details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>integer</td>
      <td>not null, primary key</td>
    </tr>
    <tr>
      <td>title</td>
      <td>string</td>
      <td>not null</td>
    </tr>
    <tr>
      <td>completed</td>
      <td>boolean</td>
      <td>not null, default: false</td>
    </tr>
    <tr>
      <td>story_id</td>
      <td>integer</td>
      <td>not null, foreign key (references stories), indexed</td>
    </tr>
  </tbody>
</table>
