import React from 'react'
import './styles/Card.css';

export default function Card() {
    return(
        <>
        <div className="card bg-violet text-white">
        <div class="card__header">
          <img src="./images/image-daniel.jpg" alt=""/>
          <div className="header-card__name-container">
            <p className="name">Daniel Clifford</p>
            <p className="ocupation">Verified Graduate</p>
          </div>
          </div>
        <div className="card__title">
          <p>
            I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
          </p>
        </div>
        <div className="card__description">
          <p>
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
            transition and have heard some people who had an amazing experience here. I signed up 
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
            The next 12 weeks was the best - and most grueling - time of my life. Since completing 
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </p>
        </div>
      </div>
        </>
   
    );
}