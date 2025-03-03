"use server"

//--------------------------------------------------------getReq
export async function getReq() {
   const res = await fetch("https://api.shipengine.com/v1/carriers",{
    method: "GET",
    headers: {
      "API-Key" : process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
      "Content-Type": "application/json"
    }
   })

   const data = await res.json()

   return data
}





//--------------------------------------------------------postReq

interface Data {
  to_name : string
  to_phone: string
  to_address: string
  to_city: string
  from_name: string
  from_company: string
  from_phone: string
  from_address: string
  from_city: string
  weight_value: number
  height: number
  width: number
  length: number
}



export async function postReq(item: Data) {

  const {to_name, to_phone, to_address, to_city, from_name, from_company, from_phone, from_address, from_city, weight_value, height, width, length} = item

  const res = await fetch("https://api.shipengine.com/v1/labels",{
    method: "POST",
    headers: {
      "API-Key" : process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "shipment": {
        "carrier_id": "se-1592450",
        "service_code": "usps_priority_mail",
        "ship_to": {
          "name": to_name,
          "phone": to_phone,
          "address_line1": to_address,
          "city_locality": to_city,
          "state_province": "CA",
          "postal_code": "95128",
          "country_code": "US",
          "address_residential_indicator": "yes"
        },
        "ship_from": {
          "name": from_name,
          "company_name": from_company,
          "phone": from_phone,
          "address_line1": from_address,
          "city_locality": from_city,
          "state_province": "TX",
          "postal_code": "78731",
          "country_code": "US",
          "address_residential_indicator": "no"
        },
        "packages": [
          {
            "weight": {
              "value": weight_value,
              "unit": "ounce"
            },
            "dimensions": {
              "height": height,
              "width": width,
              "length": length,
              "unit": "inch"
            }
          }
        ]
      }
    })
  })

  const data = await res.json()

  console.log("🍊",data);

  return data
  
}
















// "name": to_name,
// "phone": to_phone,
// "address_line1": to_address,
// "city_locality": to_city,