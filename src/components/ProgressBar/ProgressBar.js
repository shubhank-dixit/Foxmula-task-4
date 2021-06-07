import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactStars from "react-rating-stars-component";

import "./ProgressBar.css"

const percentage = 90;

function ProgressBar() {

    const ratingChanged = (newRating) => {
    };

    return (
        <div className="progressBar">

            {/* Attendance */}
            <div className="progressBar__attendance">
                <p className="progressBar__heading">Attendance</p>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                />
                <p className="progressBar__info">Last absence <br />12th May, 12:00 PM</p>
            </div>

            <div className="progressBar__tests">
                <p className="progressBar__heading">Tests</p>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                />
                <p className="progressBar__info">Last Test <br /> 100 %</p>
            </div>

            <div className="progressBar__rating">
                <p className="progressBar__heading">HW Rating</p>

                <div className="progressBar__stars">
                    <ReactStars
                        value={4.1}
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        activeColor="#EFD75B"
                    />
                    <p className="progressBar__rating">(4.1)</p>
                    <p className="progressBar__info">Last Homework <br />4.5</p>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
