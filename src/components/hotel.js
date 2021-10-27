import React, { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import Swal from "sweetalert2"
import styled from "styled-components"

function Hotel(props) {
  const [cost, setCost] = useState([])
  const handleClick = () => {
    ;(async () => {
      const { value: Receipe } = await Swal.fire({
        title: "Select Receipe",
        input: "select",
        inputOptions: {
          veg: {
            panner: `Panner &nbsp; ${Math.round(
              cost[0] * ((100 - props.discount) / 100)
            )}₹`,
            mixedveg: `Mixed Veg &nbsp; ${Math.round(
              cost[1] * ((100 - props.discount) / 100)
            )}₹`,
          },
          NonVeg: {
            chicken: `Chicken &nbsp; ${Math.round(
              cost[2] * ((100 - props.discount) / 100)
            )}₹`,
            mutton: `Mutton &nbsp; ${Math.round(
              cost[3] * ((100 - props.discount) / 100)
            )}₹`,
            fish: `Fish &nbsp; ${Math.round(
              cost[4] * ((100 - props.discount) / 100)
            )}₹`,
          },
        },
        inputPlaceholder: "Select a Item",
        showCancelButton: true,
      })
    })()
  }
  useEffect(() => {
    setCost(Object.values(props.menu))
  }, [props.mainData])

  console.log(props.discount)
  return (
    <StyleWrapper>
      <div className="container mt-5 mx-sm-4 item">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className="image" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text>
              <strong>Flat discount {props.discount}%</strong>
            </Card.Text>
            <div className="d-flex">
              <Button onClick={handleClick} className="menu">
                MENU
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </StyleWrapper>
  )
}

export default Hotel

const StyleWrapper = styled.div`

  .image {
    height: 180px;
    object-fit: cover;
  }
  .card {
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }
`
