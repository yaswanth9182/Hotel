import React, { useState, useEffect } from "react"
import Hotel from "../components/hotel"
import Swal from "sweetalert2"
import styled from "styled-components"
import { Button } from "react-bootstrap"
import hotel1 from "../images/hotel1.jpeg"
import hotel2 from "../images/hotel2.jpeg"
import hotel3 from "../images/hotel3.jpeg"
import hotel4 from "../images/hotel4.jpeg"
import hotel5 from "../images/hotel5.jpeg"
import bgImage from "../images/bg.jpg"

export default function Home() {
  const discountArr = [10, 20, 15, 20, 24]
  const HotelArr = [
    {
      title: "Paradise",
      description: "The Paradise Hotel Qianmen is located near Tiantan Park",
      image: hotel1,
      menu: {
        panner: Math.round(50 * ((100 - discountArr[0]) / 100)),
        mixedveg: Math.round(100 * ((100 - discountArr[0]) / 100)),
        chicken: Math.round(400 * ((100 - discountArr[0]) / 100)),
        mutton: Math.round(500 * ((100 - discountArr[0]) / 100)),
        fish: Math.round(500 * ((100 - discountArr[0]) / 100)),
      },
      discount: discountArr[0],
    },
    {
      title: "SFC",
      description: "The SFC Hotel Qianmen is located near Tiantan Park",
      image: hotel2,
      menu: {
        panner: Math.round(150 * ((100 - discountArr[1]) / 100)),
        mixedveg: Math.round(160 * ((100 - discountArr[1]) / 100)),
        chicken: Math.round(100 * ((100 - discountArr[1]) / 100)),
        mutton: Math.round(200 * ((100 - discountArr[1]) / 100)),
        fish: Math.round(800 * ((100 - discountArr[1]) / 100)),
      },
      discount: discountArr[1],
    },
    {
      title: "Kamat",
      description: "The Kamat Hotel Qianmen is located near Tiantan Park",
      image: hotel3,
      menu: {
        panner: Math.round(250 * ((100 - discountArr[2]) / 100)),
        mixedveg: Math.round(200 * ((100 - discountArr[2]) / 100)),
        chicken: Math.round(500 * ((100 - discountArr[2]) / 100)),
        mutton: Math.round(100 * ((100 - discountArr[2]) / 100)),
        fish: Math.round(600 * ((100 - discountArr[2]) / 100)),
      },
      discount: discountArr[2],
    },
    {
      title: "Bawachi",
      description: "The Bawachi Hotel Qianmen is located near Tiantan Park",
      image: hotel4,
      menu: {
        panner: Math.round(550 * ((100 - discountArr[3]) / 100)),
        mixedveg: Math.round(140 * ((100 - discountArr[3]) / 100)),
        chicken: Math.round(400 * ((100 - discountArr[3]) / 100)),
        mutton: Math.round(600 * ((100 - discountArr[3]) / 100)),
        fish: Math.round(900 * ((100 - discountArr[3]) / 100)),
      },
      discount: discountArr[3],
    },
    {
      title: "Novotel",
      description: "The Novotel Hotel Qianmen is located near Tiantan Park",
      image: hotel5,
      menu: {
        panner: Math.round(400 * ((100 - discountArr[4]) / 100)),
        mixedveg: Math.round(200 * ((100 - discountArr[4]) / 100)),
        chicken: Math.round(300 * ((100 - discountArr[4]) / 100)),
        mutton: Math.round(500 * ((100 - discountArr[4]) / 100)),
        fish: Math.round(400 * ((100 - discountArr[4]) / 100)),
      },
      discount: discountArr[4],
    },
  ]
  const [mainData, setMainData] = useState([])
  const [sortType, setSortType] = useState()

  useEffect(() => {
    const sortArray = type => {
      const types = {
        panner: "panner",
        mixedveg: "mixedveg",
        chicken: "chicken",
        mutton: "mutton",
        fish: "fish",
      }
      const sortProperty = types[type]
      const sorted = [...HotelArr].sort(
        (a, b) => a.menu[sortProperty] - b.menu[sortProperty]
      )
      setMainData(sorted)
    }
    sortArray(sortType)
  }, [sortType])

  const handleClick = () => {
    Swal.fire({
      title: "Hi we are here to help you",
      showCancelButton: true,
      confirmButtonText: "Ok",
      denyButtonText: `Cancel`,
    }).then(result => {
      if (result.isConfirmed) {
        ;(async () => {
          const { value: Receipe } = await Swal.fire({
            title: "Select Receipe To find least Among Given hotels",
            input: "select",
            inputOptions: {
              veg: {
                panner: "panner",
                mixedveg: "mixedveg",
              },
              NonVeg: {
                chicken: "chicken",
                mutton: "mutton",
                fish: "fish",
              },
            },
            inputPlaceholder: "Select a Item",
            showCancelButton: true,
          })
          if (Receipe) {
            setSortType(Receipe)
            Swal.fire({
              icon: "success",
              title: "Success",
              text: `The hotels are arranged with least cost ${Receipe}`,
            })
          }
        })()
      }
    })
  }
  return (
    <StyleWrapper
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        height: "100%",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          {mainData.map(i => (
            <div className="col-md-4 col-sm-6 col-12">
              <Hotel
                title={i.title}
                description={i.description}
                menu={i.menu}
                image={i.image}
                mainData={mainData}
                discount={i.discount}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <Button className="btn btn-success help" onClick={handleClick}>
            HELP
          </Button>
        </div>
      </div>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.div`
  .help {
    margin: 50px 0px;
    font-size: 28px;
    padding: 5px 30px;
    border-radius: 5px;
  }
  p {
    font-size: 14px;
  }
`
