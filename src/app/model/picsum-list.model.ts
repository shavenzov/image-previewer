type PicsumItem = {
    id: number,
    width: number,
    height: number,
    format: string,
    filename: string,
    author: string,
    author_url: string,
    post_url: string,

    preview_url: string,
    url: string
}

type PicsumList = PicsumItem[];