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
