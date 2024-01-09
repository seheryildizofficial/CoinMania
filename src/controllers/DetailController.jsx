import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import Model from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    Model.getCoin(id).then((res) => setCoin(res));
  }, []);

  const model = new Model(coin);

  return <DetailView model={model} />;
};

export default DetailController;
