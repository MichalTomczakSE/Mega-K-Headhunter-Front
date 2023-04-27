import Link from "next/link";

export const GoBack=()=>{
    return (
        <Link href={'/'}>
            <div className="flex justify-start items-center pt-2 space-x-2 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <g id="Group_29" data-name="Group 29" transform="translate(-345 298) rotate(-90)">
                        <rect id="Rectangle_13" data-name="Rectangle 13" width="30" height="30" transform="translate(268 345)" fill="#f7f7f7" opacity="0"/>
                        <path id="arrow-65" d="M0,14.135l2.24,2.24L9.5,8.982l7.257,7.393L19,14.135,9.5,4.5Z" transform="translate(273 349.563)" fill="#666"/>
                    </g>
                </svg>
                Wróć
            </div>
        </Link>
    )
}