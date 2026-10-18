"use client";
import { useEffect } from "react";
export default function Motion(){
 useEffect(()=>{
  const nodes=document.querySelectorAll('.section-heading,.service,.featured-build,.process li,.about-copy,.media-list,.contact-layout');
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('arrived');observer.unobserve(e.target)}}),{threshold:.08});
  nodes.forEach(n=>{n.classList.add('motion-ready');observer.observe(n)});
  return()=>{observer.disconnect();nodes.forEach(n=>n.classList.remove('motion-ready'))};
 },[]);
 return null;
}
