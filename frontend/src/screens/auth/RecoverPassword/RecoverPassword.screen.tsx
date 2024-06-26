import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useMemo, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ThemeContextType } from '../../../contexts/ThemeContext/ThemeContext.context';
import useTheme from '../../../contexts/ThemeContext/useTheme.hook';
import styles from './RecoverPassword.style';
import { URI_IMAGES } from '../../../assets/uri-images.asset';
import RecoverPasswordForm from '../components/RecoverPasswordForm/RecoverPasswordForm.component';
import Screen from '../../../components/Screen/Screen.component';
import AuthFooter from '../components/AuthFooter/AuthFooter.component';

function RecoverPasswordScreen({ navigation }: StackScreenProps<ParamListBase>): React.JSX.Element {
	const { theme }: ThemeContextType = useTheme();
	const style = useMemo(() => styles(theme), [theme]);

	return (
		<Screen includePadding={false}>
			<View style={style.logoContainer}>
				<Image style={style.logo} source={{ uri: URI_IMAGES.patterns.light.oracleLogo }} />
				<Text style={style.subtitle}>Recupere sua senha</Text>
			</View>
			<RecoverPasswordForm navigation={navigation} />
			<AuthFooter />
		</Screen>
	);
}

export default RecoverPasswordScreen;
