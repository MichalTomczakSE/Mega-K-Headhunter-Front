
interface UserProps{
    data: {
        icon: string,
        firstName: string,
        lastName: string,
        githubUsername: string,
        phoneNumber: string,
        email: string,
        bio:string,
    }
}


export const UserDetails=({data}:UserProps)=>{
    const {icon,firstName,lastName,githubUsername,phoneNumber,email,bio}=data;
 return(
         <div className="flex flex-col h-fit w-full text-light-primary-text max-w-xs p-8 shadow-md px-12 bg-secondary-background">
             <img src={icon} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
             <div className="space-y-4 text-center">
                 <div className="my-2 space-y-1">
                     <h2 className="text-xl font-semibold sm:text-2xl">{firstName} {lastName}</h2>

                     <a href={`https://github.com/${githubUsername}`} className="px-5 flex justify-center space-x-2 text-hyperlink-text text-base">
                         <svg className={"fill-hyperlink-text"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                         <span>{githubUsername}</span>
                     </a>

                 </div>
                 <div className="flex justify-start items-center pt-2 space-x-2 ">
                     <svg width="16" height="16" className={"fill-filter-button"}>
                         <path fill="#444" d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7 .4.4 3.9 4 7 3.9 1.8 0 2.7-.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path>
                     </svg>
                     <span>{phoneNumber}</span>
                 </div>
                 <div className="flex justify-start items-center align-middle pt-2 space-x-2 ">
                     <svg className={"w-5 h-5 fill-filter-button"} width="16" height="16" viewBox="0 0 128 96" id="email"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"></path></svg>
                     <span>{email}</span>
                 </div>
                 <div className={"text-left flex flex-col space-y-2"}>
                     <span className={"text-filter-button font-semibold"}>O mnie</span>
                     <span className={"content-center text-light-primary-text h-64 overflow-y-scroll no-scrollbar"}>{bio}</span>
                 </div>
                 <div className={"flex flex-row justify-center "}>
                     <button>dads</button>
                     <button>dads</button>
                 </div>
             </div>
         </div>
 )
}