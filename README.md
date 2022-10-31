# ebook_cripto

- React Native: 0.70.1
- Ruby (Used ASDF as version manager): ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [arm64-darwin21]
- pod: 1.11.3
- Gradle JDK: 11.0.13
- Java (Used ASDF as version manager): 
     - openjdk 11.0.17 2022-10-18 LTS
     - OpenJDK Runtime Environment Zulu11.60+19-CA (build 11.0.17+8-LTS)
     - OpenJDK 64-Bit Server VM Zulu11.60+19-CA (build 11.0.17+8-LTS, mixed mode)
- Yarn: 1.22.19
- Android Emulator: Nexus 6, api 31

## Libraries
  

* @tanstack/react-query (^4.9.0)
    * React-query is a library to make cache in front end side. We could take information from cache, update cache without make a new request, invalidate cache
    and refresh data. So, this improve a lot our performance, and is very usefull and powerfull.

* Axios (^0.27.2)
    * Lib to make request

* @shopify/flash-list (^1.3.0)
    * FlashList is more powerfull and performatic than flatList. Used to create a infinity list and render crypto list.

* styled-components (^5.3.6)
    * Create a global theme
    * Use tokens theme
    * Code organization
    

* zustand (^4.1.1)
    * Libary to use as provider. Zustand is very performatic, have selectors by default to prevent side effects, implementation is very simple and friendly 
    if we compare witth redux or context for example.

* typescript (^4.8.3)
  
  
  
## Implementation

The idea of the project was to implement more than as expected, make different, create a possibility the user find cryptos and show the growth and down regarding an cryptos.

For exemplo, if we have a user that dont know a lot about cryptos, this user wont know what search in our sistem. So, implementing a infinity list, the user could find any cryptos and choice one, or have the first contact with this world. 

So, in addition to this list, we have the core functionality too, where the user typ something and if the system find this crypto, we add into a favorit list.

In a favorite list, we have a option to unfavorite all cryptos that user wants (PS: we saved this datas only in memory to show how zustand work's. If we need to persiste this data's it will be better save into a api)


