import { View } from "react-native";

import { DATA } from "@/utils/data";

import { Header } from "@/components/header";
import { RecentList } from "@/components/recent-list";
import { PageList } from "@/components/page-list";

export default function Index(){
  return(
    <View style={{flex:1, paddingTop: 32}}>
      <Header/>
      <RecentList data={DATA.RECENT}/>
      <PageList data={DATA.PAGES}/>
    </View>
  )
}

