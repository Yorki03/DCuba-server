-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-09-2023 a las 17:19:34
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dcuba_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadas_centenas`
--

CREATE TABLE `jugadas_centenas` (
  `id_cemtenas` int(11) NOT NULL,
  `dinero` int(11) NOT NULL,
  `centena` int(3) NOT NULL,
  `estado` varchar(10) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `id_numero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadas_corridas`
--

CREATE TABLE `jugadas_corridas` (
  `id_jugadas_corridas` int(11) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `estado` varchar(10) NOT NULL,
  `dinero` int(11) NOT NULL,
  `id_numero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadas_normales`
--

CREATE TABLE `jugadas_normales` (
  `id_jugadas_normales` int(11) NOT NULL,
  `dinero_fijo` int(11) NOT NULL,
  `estado` varchar(10) NOT NULL,
  `telefono` varchar(11) NOT NULL,
  `id_numero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadas_parles`
--

CREATE TABLE `jugadas_parles` (
  `id_jugadas_parles` int(11) NOT NULL,
  `dinero` int(11) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `estado` varchar(10) NOT NULL,
  `id_numero1` int(11) NOT NULL,
  `id_numero2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `id_jugadores` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `telefono` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `limitados_dia`
--

CREATE TABLE `limitados_dia` (
  `id_limitado_dia` int(11) NOT NULL,
  `id_numero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `limitados_noche`
--

CREATE TABLE `limitados_noche` (
  `id_limitados_noche` int(11) NOT NULL,
  `id_numero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `numeros`
--

CREATE TABLE `numeros` (
  `id_numeros` int(11) NOT NULL,
  `numeros` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `numeros`
--

INSERT INTO `numeros` (`id_numeros`, `numeros`) VALUES
(1, '01'),
(2, '02'),
(3, '03'),
(4, '04'),
(5, '05'),
(6, '06'),
(7, '07'),
(8, '08'),
(9, '09'),
(10, '10'),
(11, '11'),
(12, '12'),
(13, '13'),
(14, '14'),
(15, '15'),
(16, '16'),
(17, '17'),
(18, '18'),
(19, '19'),
(20, '20'),
(21, '21'),
(22, '22'),
(23, '23'),
(24, '24'),
(25, '25'),
(26, '26'),
(27, '27'),
(28, '28'),
(29, '29'),
(30, '30'),
(31, '31'),
(32, '32'),
(33, '33'),
(34, '34'),
(35, '35'),
(36, '36'),
(37, '37'),
(38, '38'),
(39, '39'),
(40, '40'),
(41, '41'),
(42, '42'),
(43, '43'),
(44, '44'),
(45, '45'),
(46, '46'),
(47, '47'),
(48, '48'),
(49, '49'),
(50, '50'),
(51, '51'),
(52, '52'),
(53, '53'),
(54, '54'),
(55, '55'),
(56, '56'),
(57, '57'),
(58, '58'),
(59, '59'),
(60, '60'),
(61, '61'),
(62, '62'),
(63, '63'),
(64, '64'),
(65, '65'),
(66, '66'),
(67, '67'),
(68, '68'),
(69, '69'),
(70, '70'),
(71, '71'),
(72, '72'),
(73, '73'),
(74, '74'),
(75, '75'),
(76, '76'),
(77, '77'),
(78, '78'),
(79, '79'),
(80, '80'),
(81, '81'),
(82, '82'),
(83, '83'),
(84, '84'),
(85, '85'),
(86, '86'),
(87, '87'),
(88, '88'),
(89, '89'),
(90, '90'),
(91, '91'),
(92, '92'),
(93, '93'),
(94, '94'),
(95, '95'),
(96, '96'),
(97, '97'),
(98, '98'),
(99, '99');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `numeros_salidos`
--

CREATE TABLE `numeros_salidos` (
  `id_numeros_salidos` int(11) NOT NULL,
  `estado` varchar(10) NOT NULL,
  `centena` int(3) NOT NULL,
  `id_numero` int(11) NOT NULL,
  `numero1_corrido` int(11) NOT NULL,
  `numero2_corrido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id_pagos` int(11) NOT NULL,
  `bruto` int(11) NOT NULL,
  `limpio` int(11) NOT NULL,
  `juga_corri` int(11) NOT NULL,
  `parle_cente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id_pagos`, `bruto`, `limpio`, `juga_corri`, `parle_cente`) VALUES
(1, 205, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soporte`
--

CREATE TABLE `soporte` (
  `id_soporte` int(11) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `apellidos` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `telefono` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellidos`, `email`, `telefono`) VALUES
(1, 'York', 'Turcaz Guzmán', 'email1@gmail.com', '58546734'),
(2, 'Test 1', 'Test1hijo', 'york.turcaz@gmail.com', '58259802'),
(3, 'Test 2', 'Test2hijo', 'lolo123@gmail.com', '56475952'),
(4, 'Test 3', 'Test3hijo', 'lolo456@gmail.com', '58564236'),
(5, 'Test 3', 'Test3hijo', 'lolo456@gmail.com', '58564236'),
(6, 'Test 3', 'Test3hijo', 'lolo456@gmail.com', '58564236'),
(7, 'Test 1', 'Test1hijo', 'lolo456@gmail.com', '58546734'),
(8, 'Test 1', 'Test1hijo', 'lolo456@gmail.com', '58259802'),
(9, 'Test 5', 'Test5hijo', 'lolo456@gmail.com', '56846564'),
(10, 'Test 4', 'Test2hijo', 'lolo456@gmail.com', '56854664'),
(11, 'Test 4', 'Test2hijo', 'lolo456@gmail.com', '56854664'),
(12, 'Test 6', 'Test6hijo', 'test6@gamil.com', '54867996');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugadas_centenas`
--
ALTER TABLE `jugadas_centenas`
  ADD PRIMARY KEY (`id_cemtenas`),
  ADD KEY `id_numero` (`id_numero`);

--
-- Indices de la tabla `jugadas_corridas`
--
ALTER TABLE `jugadas_corridas`
  ADD PRIMARY KEY (`id_jugadas_corridas`),
  ADD KEY `id_numero` (`id_numero`);

--
-- Indices de la tabla `jugadas_normales`
--
ALTER TABLE `jugadas_normales`
  ADD PRIMARY KEY (`id_jugadas_normales`),
  ADD KEY `id_numero` (`id_numero`);

--
-- Indices de la tabla `jugadas_parles`
--
ALTER TABLE `jugadas_parles`
  ADD PRIMARY KEY (`id_jugadas_parles`),
  ADD KEY `id_numero1` (`id_numero1`),
  ADD KEY `id_numero2` (`id_numero2`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id_jugadores`);

--
-- Indices de la tabla `limitados_dia`
--
ALTER TABLE `limitados_dia`
  ADD PRIMARY KEY (`id_limitado_dia`),
  ADD KEY `id_numero` (`id_numero`);

--
-- Indices de la tabla `limitados_noche`
--
ALTER TABLE `limitados_noche`
  ADD PRIMARY KEY (`id_limitados_noche`);

--
-- Indices de la tabla `numeros`
--
ALTER TABLE `numeros`
  ADD PRIMARY KEY (`id_numeros`);

--
-- Indices de la tabla `numeros_salidos`
--
ALTER TABLE `numeros_salidos`
  ADD PRIMARY KEY (`id_numeros_salidos`),
  ADD KEY `numero1_corrido` (`numero1_corrido`),
  ADD KEY `numero2_corrido` (`numero2_corrido`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id_pagos`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `jugadas_centenas`
--
ALTER TABLE `jugadas_centenas`
  MODIFY `id_cemtenas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadas_corridas`
--
ALTER TABLE `jugadas_corridas`
  MODIFY `id_jugadas_corridas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadas_normales`
--
ALTER TABLE `jugadas_normales`
  MODIFY `id_jugadas_normales` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadas_parles`
--
ALTER TABLE `jugadas_parles`
  MODIFY `id_jugadas_parles` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id_jugadores` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `limitados_dia`
--
ALTER TABLE `limitados_dia`
  MODIFY `id_limitado_dia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `limitados_noche`
--
ALTER TABLE `limitados_noche`
  MODIFY `id_limitados_noche` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `numeros`
--
ALTER TABLE `numeros`
  MODIFY `id_numeros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT de la tabla `numeros_salidos`
--
ALTER TABLE `numeros_salidos`
  MODIFY `id_numeros_salidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id_pagos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `jugadas_centenas`
--
ALTER TABLE `jugadas_centenas`
  ADD CONSTRAINT `jugadas_centenas_ibfk_1` FOREIGN KEY (`id_numero`) REFERENCES `numeros` (`id_numeros`);

--
-- Filtros para la tabla `jugadas_corridas`
--
ALTER TABLE `jugadas_corridas`
  ADD CONSTRAINT `jugadas_corridas_ibfk_1` FOREIGN KEY (`id_numero`) REFERENCES `numeros` (`id_numeros`);

--
-- Filtros para la tabla `jugadas_normales`
--
ALTER TABLE `jugadas_normales`
  ADD CONSTRAINT `jugadas_normales_ibfk_2` FOREIGN KEY (`id_numero`) REFERENCES `numeros` (`id_numeros`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `jugadas_parles`
--
ALTER TABLE `jugadas_parles`
  ADD CONSTRAINT `jugadas_parles_ibfk_1` FOREIGN KEY (`id_numero1`) REFERENCES `numeros` (`id_numeros`),
  ADD CONSTRAINT `jugadas_parles_ibfk_2` FOREIGN KEY (`id_numero2`) REFERENCES `numeros` (`id_numeros`);

--
-- Filtros para la tabla `limitados_dia`
--
ALTER TABLE `limitados_dia`
  ADD CONSTRAINT `limitados_dia_ibfk_1` FOREIGN KEY (`id_numero`) REFERENCES `numeros` (`id_numeros`);

--
-- Filtros para la tabla `numeros_salidos`
--
ALTER TABLE `numeros_salidos`
  ADD CONSTRAINT `numeros_salidos_ibfk_1` FOREIGN KEY (`numero1_corrido`) REFERENCES `numeros` (`id_numeros`),
  ADD CONSTRAINT `numeros_salidos_ibfk_2` FOREIGN KEY (`numero2_corrido`) REFERENCES `numeros` (`id_numeros`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
