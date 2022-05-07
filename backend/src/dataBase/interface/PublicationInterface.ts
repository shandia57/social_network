interface PublicationInterface {
    id: number,
    title: string,
    text: string,
    published: string,
    image?: string,
    user: number
}

export default PublicationInterface;