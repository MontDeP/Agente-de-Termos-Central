export type DocumentType = "terms" | "privacy";

export interface SystemDoc {
  type: DocumentType;
  label: string;
  sections: { title: string; content: string }[];
  lastUpdated: string;
}

export interface SystemData {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  icon: string;
  description: string;
  lastUpdated: string;
  docs: Record<DocumentType, SystemDoc>;
}

export const systems: SystemData[] = [
  // ─────────────────────────────────────────────────────────────
  // Pronto! Portal de Serviços
  // ─────────────────────────────────────────────────────────────
  {
    id: "agrotins",
    name: "Agrotins+",
    category: "servicos",
    categoryLabel: "EVENTOS",
    icon: "Globe",
    description:
      "Guia oficial da Feira de Tecnologia Agropecuária do Tocantins com programação, mapa interativo, notícias e informações sobre expositores.",
    lastUpdated: "25/03/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "25/03/2026",
        sections: [
          {
            title: "Aceitação",
            content:
              "Ao utilizar a aplicação Agrotins, o usuário declara ter lido, compreendido e aceitado estes Termos de Uso. O acesso aos serviços digitais da feira está condicionado à observância das regras aqui estabelecidas.",
          },
          {
            title: "Identificação do Controlador",
            content:
              "Órgão Responsável: Agência de Tecnologia da Informação do Tocantins (ATI). CNPJ: 32.893.926/0001-40. Endereço: Quadra 103 Norte, Rua NO-05, Lote 02, Plano Diretor Norte, 77.001-020, Palmas-TO. Contato Oficial: contato@ati.to.gov.br.",
          },
          {
            title: "Descrição do Serviço",
            content:
              "A aplicação funciona como o guia oficial da Feira de Tecnologia Agropecuária do Tocantins (Agrotins). O sistema permite consultar a programação completa de eventos, incluindo palestras e clínicas tecnológicas; visualizar o mapa interativo do parque para localização de estandes e serviços; acessar notícias atualizadas sobre o agronegócio e o evento; e localizar expositores e obter informações de utilidade pública sobre a feira.",
          },
          {
            title: "Cadastro e Segurança",
            content:
              "O usuário deve fornecer informações exatas e atualizadas, sob pena de responsabilidade administrativa e civil. A conta é pessoal e intransferível. O usuário é o único responsável por manter a confidencialidade de suas credenciais de acesso. O acesso pode ser realizado via CPF e senha cadastrada ou através de autenticação por contas de terceiros (Google/Apple), conforme as telas de login do sistema.",
          },
          {
            title: "Uso Permitido e Conduta",
            content:
              "É estritamente proibida a utilização da aplicação para prática de atos ilícitos ou contrários à moralidade pública; inserção de dados falsos ou tentativa de fraude contra a administração pública; ações que visem comprometer a integridade tecnológica dos sistemas do Estado, como hacking, engenharia reversa ou ataques de negação de serviço; e qualquer tentativa de acesso não autorizado aos sistemas da Administração Pública Estadual.",
          },
          {
            title: "Propriedade Intelectual",
            content:
              "Todo o conteúdo, incluindo logotipos, códigos-fonte, designs e textos, é de propriedade exclusiva do Estado do Tocantins, sendo protegido pelas leis de direito autoral e propriedade intelectual.",
          },
          {
            title: "LGPD - Dados Pessoais",
            content:
              "Dados coletados: nome completo, CPF, e-mail, telefone e credenciais de acesso. Finalidade: identificação do usuário, personalização da agenda de eventos, envio de informativos sobre a feira e viabilização das funcionalidades do mapa. Base legal: execução de políticas públicas, cumprimento de obrigação legal e legítimo interesse. Direitos do usuário: o usuário pode solicitar acesso, correção ou exclusão de seus dados através do e-mail oficial de contato.",
          },
          {
            title: "Responsabilidade e Suspensão",
            content:
              "A administração pública busca garantir a disponibilidade contínua do serviço, porém não se responsabiliza por interrupções decorrentes de falhas técnicas externas ou manutenção programada. O acesso do usuário poderá ser suspenso ou cancelado imediatamente em caso de violação destes termos. Contas que violarem estas normas poderão ser suspensas ou encerradas sem aviso prévio. A ATI adota medidas de segurança para proteger o sistema, porém a aplicação é fornecida \"como está\".",
          },
          {
            title: "Legislação e Foro",
            content:
              "Estes Termos são regidos pela legislação brasileira, em especial a Lei nº 14.129/2021 (Governo Digital). Fica eleito o foro da comarca de Palmas/TO para dirimir quaisquer controvérsias.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "25/03/2026",
        sections: [
          {
            title: "Introdução",
            content:
              "Esta Política descreve como a Agência de Tecnologia da Informação do Tocantins (ATI) trata os dados pessoais dos usuários da aplicação Agrotins, em total conformidade com a Lei Geral de Proteção de Dados (LGPD).",
          },
          {
            title: "Dados Coletados",
            content:
              "Para o funcionamento adequado da aplicação, são coletados dados de identificação, como nome, CPF e endereço de e-mail; dados de comunicação, como número de telefone celular; e dados de uso, como localização em tempo real para navegação no mapa do evento e registros de acesso (logs).",
          },
          {
            title: "Finalidade do Tratamento",
            content:
              "Os dados coletados são utilizados para autenticação segura do usuário no aplicativo, gerenciamento da programação personalizada de palestras e eventos escolhidos pelo usuário, navegação dentro do Parque Agrotins através do mapa digital e envio de comunicações relevantes sobre a feira e segurança do usuário.",
          },
          {
            title: "Compartilhamento de Dados",
            content:
              "O compartilhamento de dados ocorre prioritariamente entre órgãos e entidades da Administração Pública Estadual, visando a execução de políticas públicas e a interoperabilidade de sistemas, sempre respeitando os limites da lei.",
          },
          {
            title: "Base Legal",
            content:
              "O tratamento de dados é realizado com base na execução de serviço público, cumprimento de obrigação legal e no legítimo interesse da administração pública em fomentar o setor agropecuário do Estado.",
          },
          {
            title: "Compartilhamento e Retenção",
            content:
              "Os dados poderão ser compartilhados com a Secretaria da Agricultura e Pecuária (SEAGRO) para fins de gestão do evento e estatísticas de participação, vedada a comercialização dessas informações. Os dados são armazenados pelo tempo necessário para cumprir as finalidades descritas ou conforme prazos legais de guarda documental.",
          },
          {
            title: "Direitos do Titular",
            content:
              "Em conformidade com a LGPD, o usuário tem direito ao acesso, correção, exclusão, portabilidade e revogação do consentimento. Para exercer esses direitos, o contato deve ser feito via e-mail: contato@ati.to.gov.br.",
          },
          {
            title: "Segurança",
            content:
              "A ATI utiliza protocolos de proteção e medidas técnicas administrativas para manter os dados seguros e evitar acessos não autorizados ou situações acidentais de destruição ou perda.",
          },
          {
            title: "Exclusão da Conta",
            content:
              "A exclusão da conta pode ser realizada diretamente pelo aplicativo: acesse sua conta no app, vá até as configurações de perfil, selecione a opção \"Excluir conta\" e confirme a exclusão. Ao excluir sua conta, serão removidos dados de cadastro, informações associadas à conta e dados de favoritos e registros vinculados ao usuário. Alguns dados podem ser mantidos temporariamente por até 30 dias para fins legais ou de segurança. Caso tenha dificuldades, entre em contato pelo e-mail contato@ati.to.gov.br.",
          },
          {
            title: "Alterações",
            content:
              "Esta Política de Privacidade poderá ser atualizada periodicamente. A data da última atualização estará sempre visível no topo deste documento.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Central de Ajuda (CAx)
  // ─────────────────────────────────────────────────────────────
  {
    id: "censo-aquicola",
    name: "Censo Aquícola",
    category: "infraestrutura",
    categoryLabel: "RURAL E AMBIENTAL",
    icon: "MessageCircle",
    description:
      "Solução digital para coleta, validação, consolidação e análise de informações da atividade aquícola no Tocantins.",
    lastUpdated: "24/04/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "24/04/2026",
        sections: [
          {
            title: "Aceitação",
            content:
              "Ao utilizar a aplicação Censo Aquícola, o usuário declara ter lido, compreendido e aceitado estes Termos de Uso. O acesso às funcionalidades digitais da aplicação está condicionado à observância das regras aqui estabelecidas. A utilização da aplicação implica concordância com as condições de uso, com as regras de segurança, com as finalidades de tratamento de dados pessoais e com as responsabilidades previstas neste documento.",
          },
          {
            title: "Identificação do Controlador",
            content:
              "Órgão Responsável: Agência de Tecnologia da Informação do Tocantins (ATI). CNPJ: 32.893.926/0001-40. Endereço: Quadra 103 Norte, Rua NO-05, Lote 02, Plano Diretor Norte, 77.001-020, Palmas-TO. Contato Oficial: contato@ati.to.gov.br. Caso o projeto seja operado em conjunto com outro órgão estadual responsável pela política aquícola, recomenda-se inserir também a identificação do órgão gestor do Censo Aquícola e seu canal oficial de atendimento.",
          },
          {
            title: "Descrição do Serviço",
            content:
              "A aplicação Censo Aquícola é uma solução tecnológica integrada destinada à realização do Censo Aquícola no Estado do Tocantins, substituindo processos manuais por um sistema digital composto por aplicativo móvel e plataforma web. O sistema apoia a coleta estruturada, organização, validação, consolidação e análise de informações da atividade aquícola, contribuindo para dados confiáveis e estratégicos para políticas públicas e desenvolvimento sustentável da aquicultura.",
          },
          {
            title: "Funcionalidades",
            content:
              "A aplicação permite, conforme o perfil de acesso, realizar cadastro e autenticação; coletar dados sobre unidades produtivas, produtores, empreendimentos, espécies cultivadas, infraestrutura, produção, manejo e comercialização; registrar fotografias para comprovação, fiscalização, validação ou documentação técnica; utilizar georreferenciamento; operar em modo offline com posterior sincronização; acessar plataforma web de gestão; visualizar dashboards, indicadores, mapas e relatórios; e apoiar a tomada de decisão e formulação de políticas públicas.",
          },
          {
            title: "Perfis de Usuário e Níveis de Acesso",
            content:
              "O acesso às funcionalidades poderá variar conforme o perfil do usuário e as permissões definidas pela administração pública. Poderão existir perfis de recenseador, supervisor, gestor, administrador, analista ou usuário institucional. Cada usuário deverá utilizar a aplicação apenas para finalidades compatíveis com seu perfil, atribuições e autorização de acesso.",
          },
          {
            title: "Cadastro e Segurança",
            content:
              "O usuário deve fornecer informações exatas, completas e atualizadas, sob pena de responsabilidade administrativa, civil e penal, quando aplicável. A conta de acesso é pessoal e intransferível. O usuário é responsável por manter a confidencialidade de credenciais, senhas, tokens ou demais mecanismos de autenticação, e deverá comunicar imediatamente qualquer suspeita de uso indevido, perda de credenciais, acesso não autorizado, falha de segurança ou inconsistência relevante.",
          },
          {
            title: "Uso Permitido e Conduta",
            content:
              "A aplicação deverá ser utilizada exclusivamente para as finalidades relacionadas ao Censo Aquícola e às atividades institucionais autorizadas. É proibida a prática de atos ilícitos, fraudulentos ou contrários ao interesse público; inserção, alteração, omissão ou manipulação intencional de dados falsos; registro de fotografias, coordenadas ou informações sem relação com o Censo; compartilhamento indevido de credenciais; acesso, coleta, cópia, divulgação ou uso não autorizado de dados; tentativas de comprometer sistemas do Estado; e uso para fins particulares, comerciais, político-partidários ou incompatíveis com a finalidade institucional.",
          },
          {
            title: "Coleta em Campo, Fotografias e Georreferenciamento",
            content:
              "Recursos de câmera, localização e armazenamento do dispositivo poderão ser necessários para coleta em campo, registro fotográfico, georreferenciamento e operação offline. Fotografias e coordenadas deverão estar diretamente relacionadas às finalidades do Censo Aquícola e poderão ser utilizadas para validação, auditoria, análise espacial, consolidação estatística, acompanhamento de políticas públicas e documentação técnica.",
          },
          {
            title: "Operação Offline e Sincronização",
            content:
              "A aplicação poderá permitir coleta e armazenamento temporário de dados em modo offline, para posterior sincronização com a base central quando houver conexão disponível. O usuário é responsável por sincronizar os dados coletados, conferir pendências indicadas pelo sistema e evitar exclusão, alteração indevida ou perda de informações antes do envio à base central.",
          },
          {
            title: "Propriedade Intelectual",
            content:
              "Todo o conteúdo da aplicação, incluindo logotipos, marcas institucionais, códigos-fonte, bases de dados, designs, textos, fluxos, relatórios, painéis, dashboards e demais elementos do sistema, é de propriedade exclusiva do Estado do Tocantins ou de seus respectivos titulares, sendo protegido pelas leis de direito autoral, propriedade intelectual e demais normas aplicáveis.",
          },
          {
            title: "LGPD - Dados Pessoais",
            content:
              "A aplicação poderá coletar dados como nome completo, CPF, e-mail, telefone, credenciais de acesso, órgão ou instituição de vínculo, perfil de usuário, registros de uso, dados técnicos do dispositivo, localização, fotografias, informações de coleta em campo e dados sobre unidades produtivas aquícolas. Os dados serão utilizados para identificação, autenticação, controle de acesso, execução do Censo, validação, georreferenciamento, estatísticas, dashboards, relatórios, auditoria, segurança da informação e formulação de políticas públicas. O tratamento poderá se basear na execução de políticas públicas, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, proteção do interesse público e demais hipóteses da LGPD.",
          },
          {
            title: "Compartilhamento e Direitos do Titular",
            content:
              "Os dados poderão ser compartilhados com órgãos e entidades da administração pública, parceiros institucionais e prestadores de serviço autorizados, quando necessário para execução, operação, fiscalização, auditoria, segurança, análise ou aprimoramento do Censo Aquícola. O titular poderá solicitar acesso, confirmação de tratamento, correção, atualização, anonimização, bloqueio, eliminação ou informações sobre compartilhamento, nos termos da legislação aplicável, pelo contato oficial indicado neste documento.",
          },
          {
            title: "Responsabilidade e Suspensão",
            content:
              "A administração pública busca garantir disponibilidade, segurança e adequado funcionamento da aplicação, mas não se responsabiliza por interrupções decorrentes de falhas técnicas externas, indisponibilidade de conexão, manutenção programada, caso fortuito, força maior, uso inadequado ou limitações dos dispositivos. O acesso poderá ser suspenso, limitado ou cancelado em caso de violação destes Termos, uso indevido, risco à segurança, suspeita de fraude, descumprimento de normas institucionais ou determinação de autoridade competente.",
          },
          {
            title: "Atualizações da Aplicação e dos Termos",
            content:
              "A aplicação Censo Aquícola poderá ser atualizada para correção de falhas, melhoria de funcionalidades, evolução tecnológica, adequação normativa, reforço de segurança ou atendimento a novas necessidades da administração pública. Estes Termos poderão ser alterados a qualquer momento mediante publicação da versão atualizada no ambiente oficial da aplicação. A continuidade de uso implicará ciência e concordância com a nova versão.",
          },
          {
            title: "Legislação e Foro",
            content:
              "Estes Termos são regidos pela legislação brasileira, em especial pela Lei nº 14.129/2021 (Governo Digital), Lei nº 13.709/2018 (LGPD), Lei nº 12.527/2011 (Lei de Acesso à Informação), Marco Civil da Internet e demais normas aplicáveis à administração pública, segurança da informação e proteção de dados pessoais. Fica eleito o foro da comarca de Palmas/TO para dirimir quaisquer controvérsias, ressalvadas as hipóteses legais de competência diversa.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "10/03/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve como a ATI trata os dados pessoais coletados por meio da Central de Ajuda (CAx), em conformidade com a LGPD.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos nome, matrícula, e-mail institucional, setor, descrição do problema relatado e dados de interação com o sistema de chamados.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são utilizados para: registro e resolução de chamados, gestão de suporte técnico, geração de relatórios gerenciais e melhoria contínua dos serviços de TI.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento baseia-se no exercício de função pública e cumprimento de obrigações legais, conforme art. 7º da LGPD.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados dos chamados podem ser acessados por técnicos responsáveis e gestores de TI. Não há compartilhamento externo para fins comerciais.",
          },
          {
            title: "6. Segurança",
            content:
              "O acesso ao CAx é restrito por credenciais individuais. Todas as interações são registradas em log para fins de auditoria.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Servidores podem solicitar acesso ou correção dos seus dados pessoais registrados no sistema pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Ficha Nacional de Registro de Hóspedes
  // ─────────────────────────────────────────────────────────────
  {
    id: "eu-pescador",
    name: "Eu Pescador",
    category: "infraestrutura",
    categoryLabel: "RURAL E AMBIENTAL",
    icon: "Hotel",
    description:
      "Sistema digital para cadastro e registro de hóspedes em meios de hospedagem do estado.",
    lastUpdated: "02/04/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "02/04/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula o acesso e a utilização da Ficha Nacional de Registro de Hóspedes, sistema digital para cadastro de hóspedes em meios de hospedagem do Estado do Tocantins.",
          },
          {
            title: "2. Usuários do Sistema",
            content:
              "O sistema destina-se a estabelecimentos de hospedagem regularmente cadastrados junto aos órgãos competentes do Estado do Tocantins.",
          },
          {
            title: "3. Aceitação dos Termos",
            content:
              "Ao utilizar o sistema, o responsável pelo estabelecimento declara aceitar integralmente este Termo de Uso e a responsabilidade pela veracidade dos dados cadastrados.",
          },
          {
            title: "4. Obrigações do Usuário",
            content:
              "O estabelecimento é responsável por manter os dados dos hóspedes atualizados, precisos e em conformidade com as normas vigentes, bem como pela guarda segura das credenciais de acesso.",
          },
          {
            title: "5. Uso dos Dados",
            content:
              "Os dados inseridos poderão ser acessados pelas autoridades competentes para fins de segurança pública e controle sanitário, conforme legislação aplicável.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "A ATI reserva-se o direito de alterar este Termo a qualquer momento. O uso continuado do sistema constitui aceitação dos novos termos.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "02/04/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento dos dados pessoais de hóspedes coletados por meio do sistema de Ficha Nacional de Registro de Hóspedes, em conformidade com a LGPD.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "São coletados: nome completo, documento de identidade, CPF, nacionalidade, data de nascimento, endereço de residência, data de entrada e saída, e meio de transporte utilizado.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são coletados para cumprimento de obrigação legal dos meios de hospedagem, controle de segurança pública e gestão de estatísticas do setor de turismo.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se no cumprimento de obrigação legal a que o controlador está sujeito, conforme inciso II do art. 7º da LGPD.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Os dados podem ser acessados por autoridades de segurança pública, vigilância sanitária e turismo, conforme exigência legal.",
          },
          {
            title: "6. Segurança",
            content:
              "Adotamos medidas técnicas e administrativas para proteger os dados dos hóspedes contra acessos não autorizados ou uso indevido.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "O hóspede pode solicitar acesso, correção ou eliminação de seus dados pelo e-mail contato@ati.to.gov.br, respeitados os prazos legais de retenção.",
          },
        ],
      },
    },
  },
];

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "servicos", label: "Eventos" },
  { id: "infraestrutura", label: "Rural e Ambiental" },
  { id: "outros", label: "Outros" },
];

export const featureItems = [
  {
    icon: "Lock",
    title: "Criptografia de Dados",
    description:
      "Todos os serviços digitais adotam criptografia de dados em repouso e em trânsito, garantindo a proteção das suas informações pessoais.",
  },
  {
    icon: "UserCheck",
    title: "Acesso Individual",
    description:
      "Cada conta de usuário é individual, vinculada ao CPF, com controle rigoroso de permissões pelo princípio do menor privilégio.",
  },
  {
    icon: "Eye",
    title: "Transparência",
    description:
      "Você tem direito ao acesso, correção e informação sobre o uso dos seus dados pessoais em qualquer sistema do governo.",
  },
  {
    icon: "ShieldCheck",
    title: "Conformidade LGPD",
    description:
      "Nossos sistemas seguem as diretrizes da Lei Geral de Proteção de Dados, assegurando seus direitos como titular de dados.",
  },
  {
    icon: "FileSearch",
    title: "Auditoria e Rastreabilidade",
    description:
      "Todos os acessos e operações em sistemas geridos pela ATI são registrados para garantir segurança e responsabilização.",
  },
  {
    icon: "Bell",
    title: "Comunicação de Incidentes",
    description:
      "Qualquer incidente de segurança é comunicado imediatamente à Equipe de Resposta a Incidentes Cibernéticos (ETIR/NIRTI).",
  },
];

export const rights = [
  "Acesso gratuito ao Portal de Serviços",
  "Atendimento nos termos da Carta de Serviços ao Cidadão",
  "Padronização de formulários e documentos",
  "Protocolo digital das solicitações apresentadas",
  "Escolha do canal preferencial de comunicação (e-mail, SMS, push)",
  "Gratuidade no acesso aos serviços digitais",
];

export const contacts = [
  {
    icon: "Mail",
    label: "E-mail",
    value: "contato@ati.to.gov.br",
    href: "mailto:contato@ati.to.gov.br",
  },
  {
    icon: "Phone",
    label: "Telefone",
    value: "(63) 3212-4500",
    href: "tel:+556332124500",
  },
  {
    icon: "MapPin",
    label: "Endereço",
    value:
      "103 Norte, Rua NO-05, Lote 02, Plano Diretor Norte, Palmas-TO, CEP 77.001-020",
    href: null,
  },
  {
    icon: "Globe",
    label: "Portal",
    value: "to.gov.br/ati",
    href: "https://to.gov.br/ati",
  },
  {
    icon: "ExternalLink",
    label: "Ouvidoria",
    value: "Acesse a Ouvidoria do Estado",
    href: "https://falabr.cgu.gov.br/v2/?modoOuvidoria=1&ouvidoriaInterna=false",
  },
];
