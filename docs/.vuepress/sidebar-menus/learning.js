module.exports = [{
  title: 'Learning',
  collapsable: false,
  sidebarDepth: 2,
  children: [
    '/learning/',
    {
      title: 'Terminology',
      collapsable: true,
      path: '/learning/tutorial/terminology',
      sidebarDepth: 2,
      children: [
        '/learning/tutorial/terminology'
      ]
    },
    {
      title: 'Tutorial',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        '/learning/tutorial/preparing',
        '/learning/tutorial/creatingnodes',
        '/learning/tutorial/commands',
        '/learning/tutorial/jobs',
        '/learning/tutorial/users',
        '/learning/tutorial/acls',
        '/learning/tutorial/conclusion'
      ]
    },
    {
      title: 'How To',
      collapsable: true,
      path: '/learning/howto/overview',
      sidebarDepth: 0,
      children: [
        ['/learning/howto/overview','Overview'],
        ['/learning/howto/welcome-project-starter','Welcome Projects'],
        {
          title: 'Setup / Installation',
          collapsable: true,
          sidebarDepth: 0,
          children: [
              '/learning/howto/migrate-to-rundeck-packages-repo'
          ]
        },
        {
          title: 'Managing Nodes',
          collapsable: true,
          sidebarDepth: 0,
          children: [
              '/learning/howto/ssh-on-linux-nodes.md'
          ]
        },
        {
          title: 'Writing Jobs',
          collapsable: true,
          sidebarDepth: 0,
          children: [
              '/learning/howto/use-example-jobs.md',
              '/learning/howto/passing-variables.md',
              '/learning/howto/calling-apis.md'
          ]
        },
        {
          title: 'Integrating',
          collapsable: true,
          sidebarDepth: 0,
          children: [
              '/learning/howto/using-webhooks.md',
              '/learning/howto/pagerduty-notification.md'
          ]
        },
        {
          title: 'Installation',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            '/learning/howto/migrate-to-mysql'
          ]
        },
        {
          title: 'Customizing',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            '/learning/howto/custom-script-plugin-hello-world',
            '/learning/howto/java-plugin'
          ]
        }
      ]
    },
  ]
}]
