import React, { useState, useRef } from 'react'
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native'

import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Title,
  CarouselView,
  CarouselImg,
  CarouselIcon,
  Information,
} from './styles'

import img1 from './img/anjos_da_noite_1.jpg'
import img2 from './img/anjos_da_noite_2.jpg'
import img3 from './img/anjos_da_noite_3.jpg'
import img4 from './img/anjos_da_noite_4.jpg'

const { width: scrennWidth } = Dimensions.get('window')
const imgStyle = {
  flex: 1,
  width: null,
  height: null,
  justifyContent: 'flex-start',
}

export default function App() {
  const carouselRef = useRef(null)
  const [filme] = useState([
    {
      title: 'Anjos da Noite',
      text:
        'Na calada da noite, vampiros se envolvem em uma batalha antiga com seus inimigos, os Lycans, um grupo de lobisomens violentos. Selene, uma vampira que é órfã por conta de um ataque dos Lycan, trabalha para o clã dos vampiros como uma matadora treinada. Quando os Lycan se interessam misteriosamente por Michael Corvin, um doutor mortal excepcional, Selene luta para livrá-lo de Lucian, um cruel Lycan.',
      release: '16 de abril de 2004',
      direction: 'Len Wiseman',
      img: 'img1',
    },
    {
      title: 'Anjos da Noite - A Evolução',
      text:
        'A antiga luta entre predadores ganha novas dimensões de violência. Traída pelo seu próprio clã, a guerreira vampira Selene busca vingança e decide descobrir a verdade sobre a identidade do primeiro Imortal verdadeiro.',
      release: '12 de janeiro de 2006',
      direction: 'Len Wiseman',
      img: 'img2',
    },
    {
      title: 'Anjos da Noite - A Rebelião',
      text:
        'Viktor, o cruel rei dos vampiros, tem perseguido e escravizado os lycans, uma linhagem de lobisomens nascidos humanos, por séculos. Este tirano ancião exige prata dos nobres, com o propósito de manter o controle dos seus escravos bestiais. Enquanto cresce, o jovem Lucian se apaixona pela filha de Viktor, Sonja, uma vampira insubordinada e imprudente. Juntos, Sonja e Lucian orquestram uma batalha épica, que marca o início de uma longa guerra entre vampiros e lobisomens.',
      release: '23 de janeiro de 2009',
      direction: 'Len Wiseman',
      img: 'img3',
    },

    {
      title: 'Anjos da Noite - O Despertar',
      text:
        'Após passar anos em estado de coma induzido, a vampira Selene desperta e descobre que tem uma poderosa filha metade lobisomem, metade vampira. Agora Selene precisa defender a menina de um grupo de assassinos de lobisomens.',
      release: '2 de março de 2012',
      direction: 'Len Wiseman',
      img: 'img4',
    },
  ])
  const [background, setBackground] = useState(filme[0].img)
  const [activeIndex, setActiveIndex] = useState(0)

  const btnInformation = () => {
    const info =
      'Os botões não estão funcionando, projeto somente para teste da lib react-native-snap-carousel'
    Alert.alert('Atenção', `${info}`)
  }

  const imgChange = (img) => {
    switch (img) {
      case 'img1':
        return img1
      case 'img2':
        return img2
      case 'img3':
        return img3
      case 'img4':
        return img4
      default:
        return 0
    }
  }

  // eslint-disable-next-line react/prop-types
  const filmes = ({ item }) => {
    return (
      <TouchableOpacity onPress={btnInformation}>
        <CarouselImg source={imgChange(item.img)} />
        <CarouselIcon name="play-circle-outline" size={30} color="#fff" />
      </TouchableOpacity>
    )
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={imgChange(background)}
        style={imgStyle}
        blurRadius={4}
      >
        <Title>{filme[activeIndex].title}</Title>

        <CarouselView>
          <Carousel
            layout="default"
            ref={carouselRef}
            data={filme}
            renderItem={filmes}
            sliderWidth={scrennWidth}
            itemWidth={230}
            inactiveSlideOpacity={0.6}
            // eslint-disable-next-line prettier/prettier
            onSnapToItem={(index) => {
              setBackground(filme[index].img)
              setActiveIndex(index)
            }}
          />
        </CarouselView>

        <Information>
          <Information.View>
            <Information.Title>{filme[activeIndex].title}</Information.Title>
            <TouchableOpacity onPress={btnInformation}>
              <Icon name="queue" color="#131313" size={30} />
            </TouchableOpacity>
          </Information.View>

          <Information.Text>{filme[activeIndex].text}</Information.Text>
          <Information.Release>
            {filme[activeIndex].release}
          </Information.Release>
          <Information.Direction>
            {filme[activeIndex].direction}
          </Information.Direction>
        </Information>
      </ImageBackground>
    </>
  )
}
