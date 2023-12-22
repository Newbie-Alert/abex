import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { findIcon } from "../../util.js/IconGenerate";
import Button from "../../shared/common/Button";

const ServiceCard = styled.div`
  width: 100%;
  padding: 2rem 1.25rem;
  border: 1px solid white;
  border-radius: 6px;
`;

const CardTitle = styled.h1`
  font-size: 2.25rem;
  color: white;
  margin-block: 1rem;
`;

const CardDesc = styled.p`
  width: 100%;
  color: white;
  line-height: 1.35;
  margin-block: 0.5rem;
  margin-bottom: 2.5rem;
`;

const IconBox = styled.div`
  width: 100px;
  height: 100px;
  padding-top: 1.42rem;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  text-align: center;
`;

export default function Card() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:8080/services");
      setServices([...res.data]);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const cardList = services?.map((service) => {
    return (
      <ServiceCard key={service.id}>
        <IconBox>{findIcon(service.icon, "3x")}</IconBox>
        <CardTitle>{service.title}</CardTitle>
        <CardDesc>{service.desc}</CardDesc>
        <Button width={90} height={50} text={"Go Service"} />
      </ServiceCard>
    );
  });

  return cardList;
}
