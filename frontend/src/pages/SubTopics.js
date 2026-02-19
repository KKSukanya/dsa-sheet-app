import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import "./SubTopics.css";

const SubTopics = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const { data } = await API.get("/topics");
        const selectedTopic = data.find((t) => t._id === id);
        setTopic(selectedTopic);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchTopic();
  }, [id]);

  const toggleStatus = async (subTopicId, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Done" : "Pending";

    try {
      await API.put(`/topics/subtopic/${id}/${subTopicId}`, {
        status: newStatus,
      });

      setTopic((prevTopic) => ({
        ...prevTopic,
        subTopics: prevTopic.subTopics.map((st) =>
          st._id === subTopicId ? { ...st, status: newStatus } : st
        ),
      }));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!topic) return <div className="loading">Topic not found</div>;

  return (
    <div className="subtopics-container">
      <h2 className="page-title">📘 {topic.name} - Problems</h2>

      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Resources</th>
              <th>Level</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {topic.subTopics.map((subTopic) => (
              <tr key={subTopic._id}>
                <td className="problem-name">{subTopic.name}</td>

                <td>
                  <div className="resource-links">
                    {subTopic.leetcode && (
                      <a href={subTopic.leetcode} target="_blank" rel="noreferrer" className="btn">
                        LeetCode
                      </a>
                    )}
                    {subTopic.youtube && (
                      <a href={subTopic.youtube} target="_blank" rel="noreferrer" className="btn youtube">
                        YouTube
                      </a>
                    )}
                    {subTopic.article && (
                      <a href={subTopic.article} target="_blank" rel="noreferrer" className="btn article">
                        Article
                      </a>
                    )}
                  </div>
                </td>

                <td>
                  <span className={`badge ${subTopic.level.toLowerCase()}`}>
                    {subTopic.level}
                  </span>
                </td>

                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={subTopic.status === "Done"}
                      onChange={() =>
                        toggleStatus(subTopic._id, subTopic.status)
                      }
                    />
                    <span className="slider"></span>
                  </label>
                  <span className="status-text">{subTopic.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubTopics;
