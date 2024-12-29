import { StyleSheet, Image } from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const AddTab = () => {
    return (
         <ParallaxScrollView
         customHeaderHeight={96}
         headerBackgroundColor={{ light: '#4A3780', dark: '#4A3780' }}
               headerImage={
                 <Image
                           source={require('@/assets/images/tasksListLogo.png')}
                           style={styles.headerLogo}
                         />
               }
               pageTitle={(
                       <ThemedView style={styles.pageTitleContainer}>
                         <ThemedText type="defaultSemiBold"
                                     lightColor="white"
                                     style={styles.pageTitle}
                         >
                           Add New Task
                         </ThemedText>
                       </ThemedView>
                     )}
               >
            <ThemedText type="title">Add task</ThemedText>
         </ParallaxScrollView>
    );
};

export default AddTab;

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  headerLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  pageTitleContainer: {
    position: 'absolute',
    // top: 50,
    backgroundColor: 'transparent',
    textAlign: 'center',
    left: 0,
    right: 0
  },
  pageTitle: {
    textAlign: 'center',
    marginTop: 50
  }
});

