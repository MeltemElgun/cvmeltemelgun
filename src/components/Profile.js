import React from "react";
import profile from "./Profile.module.css";
export default function Profile() {
  return (
    <main className={profile.box}>
      <p className={profile.p}>Profile</p>
      <div className={profile.contents}>
        <section className={profile.content}>
          <div className={profile.card}>
            <p className={profile.text}>Basic Information</p>{" "}
            <div className={profile.cardText}>
              <div className={profile.cardTextA}>
                <p>Date of birth</p>
                <p>City</p>
                <p>Education</p>
                <p className={profile.span1}>Role</p>
              </div>
              <div className={profile.cardTextB}>
                <p>06.10.1994</p>
                <p>Erzurum</p>
                <p className={profile.span2}>
                  {" "}
                  Atatürk Unv. Kentsel Tasarım Y.Lisans, 2023
                </p>
                <p>Frontend, UI, Backend</p>
              </div>
            </div>
          </div>
        </section>
        <section className={profile.content}>
          <div className={profile.abountText}>
            <p className={profile.aboutTextA}>About me</p>
            <p className={profile.aboutTextB}>
              I can handle complex projects with ease, thanks to my strong
              problem-solving skills and experience in various programming
              languages. My passion for technology pushes me to stay up to date
              with industry trends and constantly improve my skills.
              <br />
              <br />I am also a team player and enjoy collaborating with others
              to bring creative solutions to the table. Whether working
              independently or as part of a team, I am committed to delivering
              high-quality results on time.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
