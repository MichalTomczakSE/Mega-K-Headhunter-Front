import {UserDetails} from "@/components/common/userProfile/userDetails/userDetails";
import {UserInfo} from "@/components/common/userProfile/userInfo/userInfo";
import {Header} from "@/components/common/Header";
import {GoBack} from "@/components/common/goBack/goBack";
import {testInfo, testUser} from "@/test/testData";



const UserProfile=()=>{



    return (
        <div>
            <Header/>
            <div className={"flex h-auto sm:h-full sm:flex-row flex-col  pt-5  bg-primary-background space-y-2 sm:space-y-0 space-x-0 sm:space-x-2"}>
                <GoBack/>
                <div className={"sm:h-screen flex justify-center"}>
                    <UserDetails data={testUser}/>
                </div>
                <div className={"w-full"}>
                <UserInfo data={testInfo}/>
                    </div>
            </div>
        </div>
    )
}

export default UserProfile;