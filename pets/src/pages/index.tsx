import type { NextPage } from 'next';
import Title from '../ui/components/title/title';
import List from '../ui/components/list/list'

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title="" subTitle={
          <span>
            Com um pequeno valor mensal, você <br /><strong>pode adotar um pet virtualmente</strong>
          </span>
        } />
      <List
        pets={[
          {
            id: 1,
            name: 'Rodolfo',
            description: 'sdfsdfsdf sdfsd fsd sdfs',
            image: 'https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1'
          }
        ]}
      />

    </div>
  )
}

export default Home
