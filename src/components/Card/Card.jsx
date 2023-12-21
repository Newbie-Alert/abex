import "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 6px;
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  font-size: 3rem;
  border: 3px solid var(--primary-color);
  display: flex;
  align-items: top;
  padding-left: 0.9rem;
  padding-top: 1.2rem;
`;

const CardTitle = styled.h1`
  font-size: 2.25rem;
  color: white;
  margin-block: 1rem;
`;

const CardDesc = styled.p`
  width: 95%;
  color: white;
  line-height: 1.25;
  margin-block: 0.5rem;
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
        {/* fetch 될 때 해당하는 아이콘을 import 해야한다 */}
        <FontAwesomeIcon icon={service.icon} />
        <CardTitle>{service.title}</CardTitle>
        <CardDesc>{service.desc}</CardDesc>
      </ServiceCard>
    );
  });

  return cardList;
}
