import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function App() {
  return (

    <View style={styles.container}>

      {/*Header*/}
      <View style={styles.header}>
        <Image source={require('./assets/user.png')} style={styles.user} />
        <Text style={styles.headerText}>Sua biblioteca</Text>
        <View style={styles.pesquisa}>
          <Image source={require('./assets/lupa.png')} style={styles.pesquisaIcon} />
        </View>
        <View style={styles.mais}>
          <Image source={require('./assets/mais.png')} style={styles.maisIcon} />
        </View>
      </View>

      {/* Botão de Playlists em bx do Header */}
      <TouchableOpacity style={styles.playlistButton}>
        <Text style={styles.playlistButtonText}>Playlists</Text>
      </TouchableOpacity>


      {/*Aqui esta todas as playlists*/}
      <ScrollView>
        <View style={styles.playlistContainer}>
          <Image source={require('./assets/curtidas.jpg')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.playlistName}>Músicas Curtidas</Text>
            <Text style={styles.playlistOwner}>Playlist • 75 música</Text>
          </View>
        </View>

        <View style={styles.playlistContainer}>
          <Image source={require('./assets/katy.jpg')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.playlistName}>Rock in rio 🤪</Text>
            <Text style={styles.playlistOwner}>Playlist • Aninhaa</Text>
          </View>
        </View>

        <View style={styles.playlistContainer}>
          <Image source={require('./assets/pagode.png')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.playlistName}>Churrasco</Text>
            <Text style={styles.playlistOwner}>Playlist • Aninhaa</Text>
          </View>
        </View>

        <View style={styles.playlistContainer}>
          <Image source={require('./assets/orochi.jpg')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.playlistName}>Orochi</Text>
            <Text style={styles.playlistOwner}>Playlist • Aninhaa</Text>
          </View>
        </View>

        <View style={styles.playlistContainer}>
          <Image source={require('./assets/week.png')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.playlistName}>the weekndd 😍</Text>
            <Text style={styles.playlistOwner}>Playlist • Aninhaa</Text>
          </View>
        </View>

        <View style={styles.playlistContainer}>
          <Image source={require('./assets/matue.png')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.playlistName}>Matuê</Text>
            <Text style={styles.playlistOwner}>Playlist • Feita para Aninhaa</Text>
          </View>
        </View>

        <View style={styles.playlistContainer}>
          <Image source={require('./assets/int.png')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.playlistName}>Internacionais 💕</Text>
            <Text style={styles.playlistOwner}>Playlist • Aninhaa</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.playlistContainer}>
        <Image source={require('./assets/maisb.png')} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.playlistName}>Adicionar artistas</Text>
        </View>
      </View>

      <View style={styles.playlistContainer}>
        <Image source={require('./assets/masiq.png')} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.playlistName}>Adicionar podcasts e programas</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/inicio.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/lupa.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/bibli.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Sua Biblioteca</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
