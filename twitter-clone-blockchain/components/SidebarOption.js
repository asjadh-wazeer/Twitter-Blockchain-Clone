import { IconType } from 'react-icons';
import { useRouter } from 'next/router';//43:30

const style = {
    wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl mr-4`,
    textGeneral: `font-medium`,
    textActive: `font-bold`,
  }

function SidebarOption({text,Icon,isActive,setSelected,redirect}) {
        
    const router = useRouter() //43:36
        return (
            <div
                className={style.wrapper} onClick={()=>{
                    setSelected(text) //16:30
                    //router.push(redirect) //43:55 we get redirect from Sidebar.js
                    if (redirect) {
                        router.push(redirect)
                      } else return
              {/**44:00 */}  }}
            >

                    <div className={style.iconContainer}>
                        <Icon />
                    </div>
                    <div className={`${isActive ? style.textActive : style.textGeneral}`}>
                        {text}
                    </div>

            </div>
        )
  }

  export default SidebarOption;