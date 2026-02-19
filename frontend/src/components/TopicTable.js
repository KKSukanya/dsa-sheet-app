// src/components/TopicTable.js
import React from 'react';

const TopicTable = ({ subTopics, toggleStatus }) => {
  return (
    <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
          <th>Name</th>
          <th>LeetCode</th>
          <th>YouTube</th>
          <th>Article</th>
          <th>Level</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {subTopics.map(st => (
          <tr key={st._id}>
            <td>{st.name}</td>
            <td><a href={st.leetcode} target="_blank" rel="noreferrer">Link</a></td>
            <td><a href={st.youtube} target="_blank" rel="noreferrer">Link</a></td>
            <td><a href={st.article} target="_blank" rel="noreferrer">Link</a></td>
            <td>{st.level}</td>
            <td>
              <input
                type="checkbox"
                checked={st.status === 'Done'}
                onChange={() => toggleStatus(st._id, st.status)}
              />
              {st.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopicTable;
