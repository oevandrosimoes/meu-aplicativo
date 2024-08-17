import React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: '1', name: 'Produto 1', price: '$10', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lojaslivia.com.br%2Fproduto%2Fshampoo-elseve-200-ml-glycolic-gloss-105655&psig=AOvVaw1iqoaIxSX3x1ULfdM4f2_n&ust=1723994660344000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj6rNyq_IcDFQAAAAAdAAAAABAE' },
  { id: '2', name: 'Produto 2', price: '$20', image: 'https://via.placeholder.com/150' },
  // Adicione mais produtos conforme necessário
];

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">Este é apenas o ìnicio do meu aplicativo</Text>

        <View style={styles.container}>
          <Image source={{ uri: 'https://www.perfumariasumire.com.br/media/catalog/product/4/2/427323.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=563&width=553&canvas=553:563' }} style={styles.image} />
          <Text style={styles.name}>SHAMPOO ELSEVE 400 ML GLYCOLIC GLOSS</Text>
          <Text style={styles.price}>R$16,90</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar a Sacola</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Image source={{ uri: 'https://cdnv2.moovin.com.br/farmaciaboiron/imagens/produtos/det/sabonete-liquido-bebe-granado-250ml-602139e5d54059ed56152bbc56754ee5.jpg' }} style={styles.image} />
          <Text style={styles.name}>SABONETE LÍQUIDO BEBÊ GRANADO 250ML TRADICIONAL</Text>
          <Text style={styles.price}>R$25,50</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar a Sacola</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.3)"
          darkColor="rgba(255,255,255,0.8)">
          BY: Evandro Simões 17/08/2024
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'space-between',
    padding: 10,
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  image: {
    display: 'flex',
    alignContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 0,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
