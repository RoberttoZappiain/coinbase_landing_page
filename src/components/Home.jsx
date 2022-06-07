import React from 'react';
import styled from 'styled-components';
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import Button from './Button';

export default function Home() {
  return (
   <Section className="flex j-center a-center gap">
       <div className="content flex column gap-2">
           <div className="subtitle">
               <h3 className="flex a-center gap-1 blue">
                   <span>
                       <img src={badgePercent} alt="porcentaje" />
                   </span>
                   inversión fácil
               </h3>
           </div>
           <div className="title">
               <h1>La forma más fácil de rastrear múltiples monedas </h1>
           </div>
           <div className="description">
               <p className="subdue">
               CoinBase le permite controlar sus saldos, comerciar sin límites y obtener recompensas por operaciones específicas.
               </p>
           </div>
           <div className="buttons flex gap-1">
               <Button text="Try now" icon={<FaChevronCircleRight/>} />
               <Button text="Como comenzar?" subduedButton />
           </div>
       </div>
       <div className="image"><img src={home} alt="home" className="half-width" /></div>
   </Section>
  )
}

const Section = styled.section``;