
import { useParams } from 'react-router-dom'
import React, { useEffect, useState  } from 'react'
import { Button, Card } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {

  let { name } = useParams()

  const [product, setProduct] = useState({})

  useEffect(() => {
    let productService =  new ProductService()
    productService.getByProductName(name).then(result => setProduct(result.data.data) )
  },[])

  return (
    <div>
      {name}
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Sepete Ekle
              </Button>
              <Button basic color='red'>
                Favoriye Ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
