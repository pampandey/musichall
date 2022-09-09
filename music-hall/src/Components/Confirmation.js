import { useNavigate } from "react-router-dom";
import { Card, List } from "antd";
import { useEffect, useState } from "react";

export default function Confirmation() {
  const [appointments, setAppointments] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://musichall-api.web.app/appointments")
      .then((results) => results.json())
      .then((data) => {
        setAppointments(data);
      })
      .catch(alert);
  }, [setAppointments]);

  return (
    <>
      <div className="confirmation-page">
        <div className="confirmation-list">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={appointments}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.email}>
                  <div>{item.firstName}</div>
                  <div>{item.lastName}</div>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}

// const Confirmation = () => <h3>This is the Confirmation Page.</h3>
