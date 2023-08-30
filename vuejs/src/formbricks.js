import formbricks from '@formbricks/js'

if (typeof window !== 'undefined') {
  formbricks.init({
    environmentId: '<your-environment-id>',
    apiHost: 'https://app.formbricks.com'
  })
}

export default formbricks
