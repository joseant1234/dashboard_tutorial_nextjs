import { cacheLife } from 'next/cache'

export default async function RandomPage() {
    'use cache'
    cacheLife({
        stale: 5, // 5 segundos antes de ser obsoleto
        revalidate: 10, // 10 segundos antes de revalidar
        // expire: 86400m
    })
    await fetch(`http://localhost:8000/api/v1/institutions/`, {
            cache: 'no-cache'
        }).then(resp => resp.json());

    const uuid = crypto.randomUUID()
    return <p>Request ID: {uuid}</p>
}