import React from "react";
import "./JobCard.css"; // İlgili CSS burada tutulacak

const JobCard = ({ title, company, location, workHours, workModel, logo, view }) => {
    return (
        <div className="jobCard-job-card">
            <div className="jobCard-job-card-header">
                <h3 className="job-title">{title}</h3>
                <button className="bookmark-button"><svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333252 17.3332V2.51836C0.333252 2.0091 0.519918 1.57329 0.893252 1.21095C1.26658 0.848603 1.71484 0.667121 2.23801 0.666504H11.7618C12.2856 0.666504 12.7342 0.847985 13.1075 1.21095C13.4809 1.57391 13.6672 2.00971 13.6666 2.51836V17.3332L6.99992 14.5554L0.333252 17.3332ZM2.23801 14.5091L6.99992 12.5184L11.7618 14.5091V2.51836H2.23801V14.5091Z" fill="#293349" />
                </svg>
                </button>
            </div>
            <div className="jobCard-job-company">
                <img src={logo} alt={`${company} logo`} className="company-logo" />
                <span>{company}</span>
            </div>
            <hr className="jobCard-jobCard-divider" />
            <div className="jobCard-job-details">
                <div class="jobCard-detail-item">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8C6.4125 8 6.76575 7.85325 7.05975 7.55975C7.35375 7.26625 7.5005 6.913 7.5 6.5C7.4995 6.087 7.35275 5.734 7.05975 5.441C6.76675 5.148 6.4135 5.001 6 5C5.5865 4.999 5.2335 5.146 4.941 5.441C4.6485 5.736 4.5015 6.089 4.5 6.5C4.4985 6.911 4.6455 7.26425 4.941 7.55975C5.2365 7.85525 5.5895 8.002 6 8ZM6 13.5125C7.525 12.1125 8.65625 10.8407 9.39375 9.69725C10.1312 8.55375 10.5 7.538 10.5 6.65C10.5 5.2875 10.0658 4.172 9.19725 3.3035C8.32875 2.435 7.263 2.0005 6 2C4.737 1.9995 3.6715 2.434 2.8035 3.3035C1.9355 4.173 1.501 5.2885 1.5 6.65C1.5 7.5375 1.86875 8.55325 2.60625 9.69725C3.34375 10.8412 4.475 12.113 6 13.5125ZM6 15.5C3.9875 13.7875 2.4845 12.197 1.491 10.7285C0.4975 9.26 0.0005 7.9005 0 6.65C0 4.775 0.60325 3.28125 1.80975 2.16875C3.01625 1.05625 4.413 0.5 6 0.5C7.587 0.5 8.984 1.05625 10.191 2.16875C11.398 3.28125 12.001 4.775 12 6.65C12 7.9 11.5033 9.2595 10.5098 10.7285C9.51625 12.1975 8.013 13.788 6 15.5Z" fill="#878787" />
                    </svg>

                    <p class="jobCard-detail-text">{location}</p>
                </div>

                <div class="jobCard-detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.1364C8.80584 14.1364 9.60379 13.9776 10.3483 13.6693C11.0928 13.3609 11.7692 12.9089 12.3391 12.3391C12.9089 11.7692 13.3609 11.0928 13.6693 10.3483C13.9776 9.60379 14.1364 8.80584 14.1364 8C14.1364 7.19416 13.9776 6.39621 13.6693 5.65172C13.3609 4.90722 12.9089 4.23075 12.3391 3.66094C11.7692 3.09112 11.0928 2.63912 10.3483 2.33074C9.60379 2.02236 8.80584 1.86364 8 1.86364C6.37254 1.86364 4.81173 2.51014 3.66094 3.66094C2.51014 4.81173 1.86364 6.37254 1.86364 8C1.86364 9.62747 2.51014 11.1883 3.66094 12.3391C4.81173 13.4899 6.37254 14.1364 8 14.1364ZM15.5 8C15.5 12.142 12.142 15.5 8 15.5C3.85795 15.5 0.5 12.142 0.5 8C0.5 3.85795 3.85795 0.5 8 0.5C12.142 0.5 15.5 3.85795 15.5 8ZM10.0455 11.0095L7.31818 8.28227V3.56818H8.68182V7.71773L11.0095 10.0455L10.0455 11.0095Z" fill="#878787" />
                    </svg>
                    <p class="jobCard-detail-text">{workHours}</p>
                </div>

                <div class="jobCard-detail-item">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 0V1.42737L8 2.26737V1.26316H14.25V10.7368H11.125V12H15.5V0H6.75ZM5.1875 1.89474L0.5 5.05263V12H9.875V5.05263L5.1875 1.89474ZM9.25 2.52632V3.11368L10.2563 3.78947H10.5V2.52632H9.25ZM11.75 2.52632V3.78947H13V2.52632H11.75ZM5.1875 3.47368L8.625 5.68421V10.7368H6.75V6.94737H3.625V10.7368H1.75V5.68421L5.1875 3.47368ZM11.75 5.05263V6.31579H13V5.05263H11.75ZM11.75 7.57895V8.8421H13V7.57895H11.75Z" fill="#878787" />
                    </svg>
                    <p class="jobCard-detail-text">{workModel}</p>
                </div>

            </div>
            <a href={view} className="jobCard-viewLink"><button className="jobCard-view-button">Görüntüle</button></a>

        </div>
    );
};

export default JobCard;