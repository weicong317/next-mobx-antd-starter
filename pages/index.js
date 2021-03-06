import { Button } from 'antd';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { store1 } from '../stores/testing.js';

const Home = observer(() => (
    <>
        <div>{store1.double}</div>
        <Button type="primary" onClick={() => store1.increment()}>
            {store1.count}
        </Button>
        <Link href="/testing">
            <a>Home</a>
        </Link>
    </>
));

export default Home;
