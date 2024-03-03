import styled from "styled-components";


export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  .round-image {
    border-radius: 50%;
  }
  
  .simple-icons--springboot {
    display: inline-block;
    width: 2em;
    height: 2em;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m23.693 10.706l-4.73-8.185c-.41-.71-1.417-1.294-2.24-1.294h-9.45c-.82 0-1.831.584-2.24 1.294L.306 10.706c-.41.71-.41 1.873 0 2.584l4.725 8.189c.41.71 1.417 1.294 2.24 1.294h9.455c.82 0 1.826-.584 2.24-1.294l4.726-8.19c.41-.71.41-1.873 0-2.583zM10.976 5.755c0-.537.438-.975.974-.975s.975.438.975.975v5.821a.976.976 0 0 1-1.948 0zm.974 12.43a6.616 6.616 0 0 1-6.607-6.609A6.638 6.638 0 0 1 8.01 6.272a.866.866 0 0 1 1.214.18a.866.866 0 0 1-.178 1.213a4.876 4.876 0 0 0 5.812 7.827a4.875 4.875 0 0 0 1.967-3.916a4.897 4.897 0 0 0-1.986-3.925a.87.87 0 0 1-.183-1.214a.87.87 0 0 1 1.214-.183a6.631 6.631 0 0 1 2.687 5.322a6.613 6.613 0 0 1-6.608 6.608'/%3E%3C/svg%3E");
    background-color: currentColor;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }
  
  .devicon--java {
    display: inline-block;
    width: 2em;
    height: 2em;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cpath fill='%230074bd' d='M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092c0 0 2.871 1.795 6.873 3.351c-24.439 10.47-55.308-.607-36.115-5.969m-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6c0 0 1.993 2.025 5.132 3.131c-29.542 8.64-62.446.68-41.309-6.336'/%3E%3Cpath fill='%23ea2d2e' d='M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58c0 .001-42.731 10.67-22.324 34.187'/%3E%3Cpath fill='%230074bd' d='M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171c-4.451-1.938 3.899-4.625 6.526-5.192c2.739-.593 4.303-.485 4.303-.485c-4.953-3.487-32.013 6.85-13.743 9.815c49.821 8.076 90.817-3.637 77.896-9.468M49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326c9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958c10.832-5.239 19.644-4.643 19.644-4.643m40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285c-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725c0-.002.359-.327.468-.617'/%3E%3Cpath fill='%23ea2d2e' d='M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559c-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587'/%3E%3Cpath fill='%230074bd' d='M52.214 126.021c22.476 1.437 57-.8 57.817-11.436c0 0-1.571 4.032-18.577 7.231c-19.186 3.612-42.854 3.191-56.887.874c0 .001 2.875 2.381 17.647 3.331'/%3E%3C/svg%3E");
  }
  
  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  
    
  }

`