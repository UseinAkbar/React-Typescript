import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ButtonStyle from './components/ButtonStyle'
import ButtonRecordType from './components/ButtonRecordType'
import ButtonWithChildren from './components/ButtonWithChildren'
import OtherButton from './components/OtherButton'
import IntersectButton from './components/IntersectButton'

function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])
  const handleClick = (value: number) => {
    return value
  }

  return (
    <>
      <div>
        <Button 
          bgColor='bg-blue-950' 
          textColor='text-white' 
          fontSize={16} 
          padding={[2, 4]}
        />

        <ButtonStyle 
          styles={{
            backgroundColor: 'red',
            color: '#fff',
            fontSize: '16px',
            padding: '8px',
            borderRadius: '6px'
          }}
          handleClick={handleClick}
        />

        <ButtonRecordType
          borderRadius={{
            topLeft: 6,
            topRight: 6,
            bottomLeft: 6,
            bottomRight: 6
          }}
        />

        <ButtonWithChildren
          styles={{
            backgroundColor: 'purple',
            color: '#fff',
            fontSize: '16px',
            padding: '8px',
            borderRadius: '6px'
          }}
          setCount={setCount}
          setList={setList}
        >Click Here!</ButtonWithChildren>

        <OtherButton type='button' variant='primary' disabled={false} autoFocus={true} />
        <IntersectButton type='button' color='black' size='md' />
      </div>
    </>
  )
}

export default App
