import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ServiceCard = styled.div`
  width: 100%;
  border: 1px solid white;
  border-radius: 6px;
`;

const CardTitle = styled.h1`
  font-size: 1.25rem;
  color: white;
`;
const CardDesc = styled.p`
  width: 100%;
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
      <ServiceCard>
        {/* fetch 될 때 해당하는 아이콘을 import 해야한다 */}
        <FontAwesomeIcon icon={service.icon} color="white" />
        <CardTitle>{service.title}</CardTitle>
        <CardDesc>{service.desc}</CardDesc>
      </ServiceCard>
    );
  });

  return cardList;
}
