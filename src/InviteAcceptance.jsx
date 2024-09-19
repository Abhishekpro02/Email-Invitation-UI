import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const InviteAcceptance = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Extract query params from URL
  const orgName = searchParams.get("orgName");
  const orgId = searchParams.get("orgId");
  const token = searchParams.get("token");

  const handleAccept = () => {
    // Logic to accept the invite (e.g., API call using orgId and token)
    console.log("Invite accepted");
    navigate("/dashboard"); // Redirect to dashboard after acceptance
  };

  const handleCancel = () => {
    // Logic to reject or cancel the invite
    console.log("Invite cancelled");
    navigate("/"); // Redirect to home page or wherever appropriate
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          src="https://res.cloudinary.com/dhrbirejf/image/upload/v1722243697/logo-email_uunyfq.png"
          alt="Logo"
          style={styles.logo}
        />
      </div>

      <div style={styles.content}>
        <h1>Accept invite</h1>
        <p>You have been invited to join the following organization:</p>
        <p>
          <strong>Organization name:</strong> {orgName}
        </p>
        <p>
          <strong>Organization ID:</strong> {orgId}
        </p>
        <p>
          <strong>Group name:</strong> This organization does not have a group.
        </p>
        <p>
          Make sure that you recognize the group and organization before
          accepting this invitation. Would you like to become a member of this
          organization?
        </p>

        <div style={styles.buttons}>
          <button onClick={handleAccept} style={styles.acceptButton}>
            Accept Invitation
          </button>
          <button onClick={handleCancel} style={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: "8px",
    marginTop: "50px",
  },
  header: {
    backgroundColor: "#4A90E2",
    padding: "20px",
    borderRadius: "8px 8px 0 0",
  },
  logo: {
    maxWidth: "150px",
  },
  content: {
    padding: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  acceptButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    marginRight: "10px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default InviteAcceptance;
