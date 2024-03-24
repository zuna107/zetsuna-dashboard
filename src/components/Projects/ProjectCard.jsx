import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import axios from "axios"; // Impor axios untuk melakukan pengiriman HTTP

export const ProjectCard = ({
  project: { title, imageSrc, logo, description, badges, aboutMe, memberSince, roles },
}) => {
  const [name, setName] = useState(""); // State untuk menyimpan nama pengirim
  const [message, setMessage] = useState(""); // State untuk menyimpan pesan
  const [showInfo, setShowInfo] = useState(false);

const handleShowInfo = () => {
  setShowInfo(!showInfo);
};



const handleMessageSend = async () => {
  try {
    // Gabungkan nama, mention, dan pesan
    const content = `**Name:** ${name}\n**Message:** ${message}\n<@948093919835590666>`;

    // Kirim pesan ke Discord webhook
    const response = await axios.post(
      "https://discord.com/api/webhooks/1221401653878456330/DvmRBLVc_Na5Ti3i9ht9HGUExc4zgT0AUwIRkt9q2DT3c4jrW8gK8XPtcc1_vuI9t4ns",
      { content }
    );
    console.log(response.data);
    // Kosongkan nama dan pesan setelah pengiriman berhasil
    setName("");
    setMessage("");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className={`${styles.container} ${styles.card} nitro-card`}>
      <div className={styles["card-header"]}>
        <div
          className={`${styles["banner-img"]} banner`}
          style={{ backgroundImage: `url(${getImageUrl(imageSrc)})` }}
        ></div>
      </div>
      <div className={styles["card-body"]}>
        <div className={styles["profile-header"]}>
          <div className={styles["profil-logo"]}>
            <img src={getImageUrl(logo)} alt={`Image of ${title}`} />
          </div>
          <div className={styles["badges-container"]}>
            {/* Render badges */}
            {badges.map((badge, index) => (
              <div key={index} className={styles["badge-item"]}>
                <img src={getImageUrl(badge.image)} alt={badge.tooltip} />
                <div className={`${styles.tooltip} tooltip tooltip-up`}>{badge.tooltip}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["profile-body"]}>
          <div className={styles.username}>
            <a>{title}</a>
          </div>
          <p style={{ color: "white" }}>
  Mimo#1234 <span className={styles["bot-badge"]}>BOT</span>
</p>

          <br />
          <hr />
          {/* Render about me, member since, and roles */}
          <div className={`${styles["basic-infos"]} ${styles["about-me"]}`}>
            <div className={styles["category-title"]}>ABOUT ME</div>
            <p dangerouslySetInnerHTML={{ __html: aboutMe }}></p>
          </div>
          
          <div className={styles["basic-infos"]}>
            <div className={styles["category-title"]}>Member Since</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="https://i.ibb.co/HpbSK8B/icons8-discord-16.png" style={{ marginRight: "10px" }} />
              <p style={{ margin: "0" }}>{memberSince}</p>
            </div>
          </div>
          <div className={styles["roles"]}>
            <div className={styles["category-title"]}>Roles</div>
            <div className={styles["roles-list"]}>
              {roles.map((role, index) => (
                <div key={index} className={styles["role"]}>
                  <div className={styles["role-color"]} style={{ background: role.color }}></div>
                  <p>{role.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles["show-info"]} onClick={handleShowInfo}>
  <div className="flex h-6 w-6 items-center justify-center text-xs">?</div>
</div>

{showInfo && (
  <div className={styles["info-box"]}>
    <p>Please enter your name and message you want to send, then Mimo bot on Discord will send the message to me.</p>
  </div>
)}

          {/* Input nama, pesan, dan tombol kirim */}
          <div className="message">
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className={styles["input-message"]}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              id="content"
              type="text"
              placeholder="Send me a message as Mimo"
              className={styles["input-message"]}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            
            <button className={styles["send-button"]} onClick={handleMessageSend}>
              Send
            </button>
          </div>
          <div id="message-status" style={{ display: "none" }}>
            <b>Message Sent!</b>
          </div>
        </div>
      </div>
    </div>
  );
};
