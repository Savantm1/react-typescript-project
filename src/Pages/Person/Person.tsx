import { useSelector } from 'react-redux'
import LayoutApp from '../../LayoutApp/LayoutApp'

const Person = () => {
    const name = useSelector((state :any)=> state.person.name)
    return (
        <LayoutApp>
            {name}
        </LayoutApp>
    )
}

export default Person
