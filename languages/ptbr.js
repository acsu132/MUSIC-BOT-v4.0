module.exports = {
    // Comando Play
    playDescription: 'Tocar uma música',
    playErrorNotInVoiceChannel: 'Você precisa estar em um canal de voz para usar este comando!',
    playSearchingForSong: 'Procurando por {song}...',
    playErrorTitle: 'Erro',
    playSearchingTitle: 'Procurando Música',

    // Comando Volume
    volumeDescription: 'Ajustar o volume',
    volumeNoSongPlaying: 'Não há música tocando no momento!',
    volumeInvalidLevel: 'O volume deve estar entre 0 e 100.',
    volumeSetTitle: 'Volume Ajustado',
    volumeSetDescription: 'Volume ajustado para {volume}%.',

    // Comando Time
    timeDescription: 'Mostrar o tempo de reprodução atual',
    timeNoSongPlaying: 'Não há música tocando no momento!',
    timeTitle: 'Tempo de Reprodução Atual',
    timeDescriptionText: 'Tempo atual: `{currentTime}` / `{duration}`',

    // Comando Stop
    stopDescription: 'Parar a música e limpar a fila',
    stopNoSongPlaying: 'Não há música tocando no momento!',
    stopTitle: 'Música Parada',
    stopDescriptionText: 'A música foi parada e a fila foi limpa.',

    // Comando Skip
    skipDescription: 'Pular a música atual',
    skipNoSongPlaying: 'Não há música tocando no momento!',
    skipNoMoreSongs: 'Não há mais músicas para pular!',
    skipTitle: 'Música Pulada',
    skipDescriptionText: 'A música atual foi pulada!',

    // Comando Shuffle
    shuffleDescription: 'Embaralhar a fila',
    shuffleNoSongPlaying: 'Não há música tocando no momento!',
    shuffleTitle: 'Fila Embaralhada',
    shuffleDescriptionText: 'A fila foi embaralhada.',

    // Comando Seek
    seekDescription: 'Avançar para um determinado tempo na música',
    seekNoSongPlaying: 'Não há música tocando no momento!',
    seekInvalidTime: 'O tempo deve estar dentro da duração da música.',
    seekTitle: 'Avançado',
    seekDescriptionText: 'Avançado para {time} na música.',

    // Comando Resume
    resumeDescription: 'Retomar a música pausada',
    resumeNoSongPlaying: 'Não há música tocando no momento!',
    resumeAlreadyPlaying: 'A música já está tocando!',
    resumeTitle: 'Música Retomada',
    resumeDescriptionText: 'A música foi retomada!',

    // Comando Remove
    removeDescription: 'Remover uma música da fila',
    removeNoSongPlaying: 'Não há música tocando no momento!',
    removeInvalidIndex: 'Índice de música inválido.',
    removeTitle: 'Removido',
    removeDescriptionText: '{song} foi removida da fila.',

    // Comando Queue
    queueDescription: 'Mostrar a fila atual',
    queueNoSongPlaying: 'Não há música tocando no momento!',
    queueTitle: 'Fila Atual',
    queueFooterText: 'Duração total: {duration}',

    // Comando Previous
    previousDescription: 'Tocar a música anterior',
    previousNoSongPlaying: 'Não há música tocando no momento!',
    previousTitle: 'Tocando Música Anterior',
    previousDescriptionText: 'A música anterior na fila está tocando.',

    // Comando Pause
    pauseDescription: 'Pausar a música atual',
    pauseNoSongPlaying: 'Não há música tocando no momento!',
    pauseAlreadyPaused: 'A música já está pausada!',
    pauseTitle: 'Música Pausada',
    pauseDescriptionText: 'A música foi pausada!',

    // Comando Now Playing
    nowplayingDescription: 'Mostrar a música que está tocando agora',
    nowplayingNoSong: 'Não há música tocando no momento!',
    nowplayingTitle: 'Tocando Agora',

    // Comando Loop
    loopDescription: 'Definir o modo de repetição',
    loopNoSong: 'Não há música tocando no momento!',
    loopInvalidMode: 'Modo de repetição inválido. Os modos válidos são 0 (desligado), 1 (música), 2 (fila).',
    loopModeDisabled: 'Modo de repetição desativado',
    loopSongEnabled: 'Repetição de música ativada',
    loopQueueEnabled: 'Repetição da fila ativada',
    loopTitle: 'Modo de Repetição Definido',

    // Comando Jump
    jumpDescription: 'Pular para uma música específica na fila',
    jumpNoSong: 'Não há música tocando no momento!',
    jumpInvalidIndex: 'Índice de música inválido.',
    jumpTitle: 'Pulou',
    jumpSuccess: 'Pulou para a música número {index}.',

    // Comando Find
    findDescription: 'Procurar por uma música',
    findNoVoiceChannel: 'Você precisa estar em um canal de voz para usar este comando.',
    findNoResults: 'Nenhuma música encontrada para sua solicitação.',
    findTitle: 'Resultados da Busca',
    findPrompt: 'Escolha uma música para adicioná-la à fila:',
    findSongSelected: 'Música selecionada **{title}** está tocando!',

    // Filtros
    filters: {
        description: 'Mostrar filtros de áudio disponíveis e aplicar um clicando em um botão',
        errorTitle: 'Erro',
        noSongPlaying: 'Não há música tocando no momento!',
        availableFiltersTitle: 'Filtros Disponíveis',
        clickButtonToApply: 'Clique em um botão para aplicar um filtro',
        clearFiltersLabel: 'Limpar Filtros',
        notYourButton: 'Você não pode usar este botão!',
        filtersCleared: 'Todos os filtros foram limpos.',
        appliedFilter: 'Filtro aplicado',
        timeout: 'Tempo esgotado para a seleção do filtro.'
    },

    // Comando Clear
    clear: {
        description: 'Limpar a fila',
        errorTitle: 'Erro',
        noSongPlaying: 'Não há música tocando no momento!',
        queueClearedTitle: 'Fila Limpa',
        queueClearedDescription: 'A fila foi limpa.'
    },

    // Comando Autoplay
    autoplay: {
        description: 'Alternar o autoplay',
        errorTitle: 'Erro',
        noSongPlaying: 'Não há música tocando no momento!',
        autoplayToggledTitle: 'Autoplay alternado',
        autoplayStatus: 'Autoplay está agora',
        enabled: 'ativado',
        disabled: 'desativado'
    },

    // Comando AddSong
    addsong: {
        description: 'Adicionar uma música a uma playlist',
        playlistDesc: 'O nome da playlist',
        songDesc: 'A URL ou o nome da música',
        errorAccess: 'Erro ao acessar a playlist.',
        errorNotFound: 'Playlist não encontrada ou você não é o proprietário.',
        errorAdd: 'Erro ao adicionar a música.',
        successTitle: 'Música Adicionada',
        addedSong: 'Música adicionada',
        toPlaylist: 'à playlist'
    },

    // Comando CreatePlaylist
    createplaylist: {
        description: 'Criar uma nova playlist',
        nameDesc: 'O nome da playlist',
        visibilityDesc: 'Pública ou Privada',
        error: 'Erro ao criar a playlist.',
        successTitle: 'Playlist Criada',
        successMessage: 'A playlist foi criada com sucesso.',
        visibilityLabel: 'Visibilidade',
        public: 'Pública',
        private: 'Privada'
    },

    // Comando DeletePlaylist
    deleteplaylist: {
        description: 'Excluir uma playlist',
        playlistDesc: 'O nome da playlist a ser excluída',
        error: 'Erro ao processar a solicitação.',
        notFound: 'Playlist não encontrada.',
        noPermission: 'Você não tem permissão para excluir esta playlist.',
        successTitle: 'Playlist Excluída',
        successMessage: 'A playlist foi excluída'
    },

    // Comando PlayPlaylist
    playplaylist: {
        description: 'Tocar uma playlist',
        playlistDesc: 'O nome da playlist',
        notInVoiceChannel: 'Você precisa estar em um canal de voz para usar este comando.',
        error: 'Erro ao acessar a playlist.',
        notFound: 'Playlist não encontrada.',
        noPermission: 'Esta playlist é privada e você não é o proprietário.',
        emptyPlaylist: 'A playlist está vazia.',
        successTitle: 'Playlist Iniciada',
        successMessage: 'A playlist está tocando',
        failedToPlay: 'Erro ao tocar a playlist.'
    },

    // Comando RemoveSong
    removesong: {
        description: 'Remover uma música de uma playlist',
        playlistDesc: 'O nome da playlist',
        songDesc: 'A URL ou o nome da música',
        error: 'Erro ao acessar a playlist.',
        notFound: 'Playlist não encontrada ou você não é o proprietário.',
        removeError: 'Erro ao remover a música.',
        successTitle: 'Música Removida',
        successMessage: 'Removida',
        fromPlaylist: 'da playlist'
    },

    // Comando ShowAllPlaylists
    showallplaylists: {
        description: 'Mostrar todas as playlists',
        error: 'Erro ao recuperar as playlists.',
        noPlaylists: 'Nenhuma playlist encontrada.',
        title: 'Todas as Play