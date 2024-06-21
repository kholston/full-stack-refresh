import type {
    GetStaticProps,
    GetStaticPropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import { fetchNames } from '@/utils/fetch-names'

type responseItemType = {
    id: string;
    name: string;
}

const NamesISR: NextPage = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
    const output = props.names.map((item: responseItemType, idx: number)=> {
        return(
            <li key={`name-${idx}`}>
                {item.id} {item.name}
            </li>
        )
    })

    return(
        <ul>
            {output}
        </ul>
    )
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
    let names: responseItemType[] | [] = []
    try {
        names = await fetchNames()
    } catch (err) {}

    return {
        props: {
            names,
            revalidate: 30
        }
    }
}

export default NamesISR